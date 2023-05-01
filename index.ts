import { Request, Response } from "express"

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.DEV_PORT
const db = process.env.DB

const app = express()


mongoose.connect(db);

mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err: Error) => {
console.error('Failed to connect to MongoDB:', err);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server Deployes on Heroku');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });