import express, { request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { redirectToHTTPS } from "express-http-to-https";
import session from "express-session";
import { connect, set, connection } from "mongoose";

const MongoStore = require("connect-mongo")(session);

import { SECRET_KEY, mongoURI } from "./config/secrets";
import { sessMaxAge } from "./config/main";

const PRODUCTION = process.env.NODE_ENV === "production";

const app = express();
const server = require("http").Server(app);
export const io = require("socket.io")(server, { serveClient: false });

// Middleware
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express-session
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: SECRET_KEY,
    store: new MongoStore({
      mongooseConnection: connection,
      autoRemove: "interval",
      autoRemoveInterval: 1
    }),
    resave: false,
    saveUninitialized: false,

    cookie: { secure: PRODUCTION, maxAge: sessMaxAge, sameSite: false }
  })
);

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

const port = process.env.PORT || 5000;

server.listen(port, () => console.info(`Server is running on ${port}`));

// io.on("connection", (socket: any) => {
//   console.log("user connected");
//   socket.on("login", (User: UserI) => {

//   });
//   socket.on("message", (from: UserI, msg: MessageI, to: UserI["ID"]) => {
//     console.log(from, to, msg);

//     socket.emit("message", { from, to, msg });
//   });

//   socket.on("disconnect", reason => {
//     console.log(reason);
//     console.log("disconnected");
//   });
// });
