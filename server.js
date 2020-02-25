"use strict";
const express = require('express'), serveStatic = require('serve-static'), port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());
const Test = require('./server/routes/test.js');
app.use('/test', Test);
app.use(serveStatic(__dirname + '/dist/pwa'));
app.listen(port);
//# sourceMappingURL=server.js.map