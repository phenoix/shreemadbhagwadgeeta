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

app.use('/users', usersRouter);
app.use('/geeta', geetaRouter);  

//app.use('/', indexRouter);
// Add code for Heroku . When someone reaches the root "/", send Index.html of the react
app.use(express.static('frontend/build'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});



module.exports = app;
