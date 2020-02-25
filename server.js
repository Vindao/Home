"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express'), serveStatic = require('serve-static'), port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
var test_1 = __importDefault(require("./server/routes/test"));
app.use('/test', test_1.default);
app.use(serveStatic(__dirname + '/dist/pwa'));
app.listen(port);
