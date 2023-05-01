"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();
var port = process.env.DEV_PORT;
var db = process.env.DB;
var app = express();
mongoose.connect(db);
mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', function (err) {
    console.error('Failed to connect to MongoDB:', err);
});
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map