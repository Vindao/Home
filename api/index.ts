/*
This is a robust user Backend

_______DEPENDENCIES_________

express
mongoose
cors
body-parser

*/

import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
// @ts-ignore
import { json, urlencoded } from 'body-parser';
import { redirectToHTTPS } from 'express-http-to-https';

// initialize app
const app = express();

/*
_____CONFIGURATIONS______*/

import config from './config/main';

//---PORT---

const port = config.port;

//--- MongoURI ---
import { mongoURI } from './config/secrets';

// general CONFIGS
app.use(json());
app.use(cors());
app.use(
  urlencoded({
    extended: true
  })
);
const ignoreHosts = [/localhost:3000/, /localhost:5000/];
const ignoreRoutes: RegExp[] = [];
app.use(redirectToHTTPS(ignoreHosts, ignoreRoutes));

// connect to MongoDB
connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

// ROUTES

import User from './routes/User';

app.use('/api/user', User);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
