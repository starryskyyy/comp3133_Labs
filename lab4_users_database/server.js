require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json()); 

const DB_CONNECTION_STRING = process.env.DATABASE_URL
const SERVER_PORT = 3000

mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);

app.listen(SERVER_PORT, () => { console.log(`Server is running on http://localhost:${SERVER_PORT}`) });