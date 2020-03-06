import express from "express";

// Mongo
import { connect, set, connection } from "mongoose";
// Session
import session from "express-session";
import sharedSession from "express-socket.io-session";

import webpush from "web-push";

// Middleware
import bodyParser from "body-parser";
import cors from "cors";
import { redirectToHTTPS } from "express-http-to-https";

// Config
import { sessMaxAge, port } from "./config/main";
import { SECRET_KEY, mongoURI, publicKey, privateKey } from "./config/secrets";

// helper
const PRODUCTION = process.env.NODE_ENV === "production";

// initializer
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { serveClient: false });

// Middleware
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express-session
const MongoStore = require("connect-mongo")(session);
app.set("trust proxy", 1); // trust first proxy
const userSession = session({
  secret: SECRET_KEY,
  store: new MongoStore({
    mongooseConnection: connection,
    autoRemove: "interval",
    autoRemoveInterval: 1
  }),
  resave: false,
  saveUninitialized: false,

  cookie: { secure: PRODUCTION, maxAge: sessMaxAge, sameSite: false }
});

app.use(userSession);

// cors
app.use(
  cors({
    origin: ["http://localhost:8080", "https://vindao.herokuapp.com"],
    methods: ["GET", "POST"],
    credentials: true
  })
);

// connect to MongoDB
set("useCreateIndex", true);
connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected"))
  .catch((err: object) => console.log(err));

// routes
import User from "./routes/user";
app.use("/api/user", User);

server.listen(port, () => console.info(`Server is running on ${port}`));

// WebPush
webpush.setVapidDetails("mailto:vindao@outlook.com", publicKey, privateKey);

// SOCKET.IO

import { UserI, MessageI } from "../types/User";

export interface SubscribedUsers {
  [key: string]: webpush.PushSubscription;
}

const subscribedUsers: SubscribedUsers = {};

io.use(sharedSession(userSession));

io.on("connection", (socket: any) => {
  console.log("user connected");
  console.log(socket.handshake.session);
  if (socket.handshake.session.authenticated && socket.handshake.session.user) {
    socket.join(socket.handshake.session.user.ID);
  } else {
    socket.close();
  }

  socket.on(
    "register",
    (User: UserI, subscription: webpush.PushSubscription) => {
      socket.handshake.session.subscription = subscription;
      subscribedUsers[User.ID] = subscription;
    }
  );

  socket.on("message", (from: UserI, msg: MessageI, to: UserI["ID"]) => {
    console.log(from, to, msg);
    if (subscribedUsers[to]) {
      const payload = JSON.stringify({ title: "Test" });
      webpush
        .sendNotification(subscribedUsers[to], payload)
        .catch(err => console.error(err));
    }
    socket.emit("message", { from, to, msg });
  });

  socket.on("disconnect", (reason: string) => {
    console.log("disconnected");
  });
});
