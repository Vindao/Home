const express = require('express'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//test

// Middleware
app.use(bodyParser.json());
app.use(cors());

import Test from './server/routes/test';
app.use('/test', Test);

app.use(serveStatic(__dirname + '/dist/pwa'));
app.listen(port);
