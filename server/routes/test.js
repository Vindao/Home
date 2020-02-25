"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var Example = express.Router();
Example.get('/example', function (req, res, next) {
    res.send('This is an awesome fsdfer example route.');
});
exports.default = Example;
