const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);
app.use(express.urlencoded({extended: true}));



module.exports = app;  