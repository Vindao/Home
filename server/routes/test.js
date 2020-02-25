"use strict";
var express = require('express');
var Example = express.Router();
Example.get('/example', function (req, res, next) {
    res.send('This is an awesome example route.');
});
module.exports = Example;
