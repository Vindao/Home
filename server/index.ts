import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { redirectToHTTPS } from 'express-http-to-https';
import session from 'express-session';
import { connect, set } from 'mongoose';

import { SECRET_KEY, mongoURI } from './config/secrets';
import { sessMaxAge } from './config/main';

const PRODUCTION = process.env.NODE_ENV === 'production';

const app = express();

// Middleware
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,

    cookie: { secure: PRODUCTION, maxAge: sessMaxAge }
  })
);

// connect to MongoDB
set('useCreateIndex', true);
connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb connected'))
  .catch((err: object) => console.log(err));

// routes
import User from './routes/user';
app.use('/api/user', User);

const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Server is running on ${port}`));
