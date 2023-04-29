require('dotenv').config()

const port = process.env.DEV_PORT
const db = process.env.DB

const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect(db);

mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err: Error) => {
console.error('Failed to connect to MongoDB:', err);
});

app.listen(port, () => console.log("Listening on port " + port))

app.get)