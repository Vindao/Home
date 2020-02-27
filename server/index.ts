import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { redirectToHTTPS } from 'express-http-to-https';

const app = express();

// Middleware
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(bodyParser.json());
app.use(cors());

// routes
import User from './routes/user';
app.use('/api/user', User);

const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Server is running on ${port}`));
