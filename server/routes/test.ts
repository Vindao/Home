const express = require('express');

const Example = express.Router();

Example.get('/example', (req, res, next) => {
  res.send('This is an awesome example route.');
});

module.exports = Example;
