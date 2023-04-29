"use strict";
require('dotenv').config();
var port = process.env.DEV_PORT;
var db = process.env.DB;
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(db);
mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', function (err) {
    console.error('Failed to connect to MongoDB:', err);
});
app.listen(port, function () { return console.log("Listening on port " + port); });
//# sourceMappingURL=index.js.map