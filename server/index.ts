import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { redirectToHTTPS } from "express-http-to-https";
import session from "express-session";
import { connect, set, connection } from "mongoose";
import cookieParser from "cookie-parser";

const MongoStore = require("connect-mongo")(session);

import { SECRET_KEY, mongoURI } from "./config/secrets";
import { sessMaxAge, BaseClientUrl } from "./config/main";

const PRODUCTION = process.env.NODE_ENV === "production";

const app = express();

// Middleware
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(SECRET_KEY));

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

const whitelist = [/localhost:(\d{4})/, "https://vindao.herokuapp.com"];
const corsOptions = {
  origin: function(origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

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

app.listen(port, () => console.info(`Server is running on ${port}`));
