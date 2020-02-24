const express = require('express'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const Test = require('./server/routes/test.ts');
app.use('/api/test', Test);

// //@ts-ignore
// app.get('/example', (req, res, next) => {
//   res.send('This is an example route.');
// });

app.use(serveStatic(__dirname + '/dist/pwa'));
app.listen(port);
