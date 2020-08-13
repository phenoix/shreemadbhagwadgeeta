var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var geetaRouter = require('./routes/geeta');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const connectMongoDB = require('./config');
connectMongoDB();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/geeta', geetaRouter);  


module.exports = app;
