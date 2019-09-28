// Ran Xu
// COP 4331
// server.js
// HW: contact project

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// userNewUrlParse: true
mongoose.connect(uri, {useUnifiedTopology: true,useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', () =>
{
  console.log("MongoDB database connection established successfully");
})

const contactRouter = require('./routes/contact');
const userRouter = require('./routes/user');

app.use('/contact', contactRouter);
app.use('/user', userRouter);

app.listen(port, () =>
{
  console.log(`Server is running on port: ${port}`);
});