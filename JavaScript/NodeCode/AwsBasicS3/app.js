/**
 * Module dependencies.
 */

// Core
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Frequent
var exec = require('child_process').exec;
var http = require('http');

// Custom

var routes = require('./routes/index');
var users = require('./routes/user');
var awsCopy = require('./routes/AwsCopy');

var app = express();

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Source')));
app.use(express.static(path.join(__dirname, 'Images')));

app.use('/', routes);
app.use('/users', users);
app.use('/AwsCopy', awsCopy);

// app.use(express.favicon('Images/favicon16.ico'));
// app.use(express.favicon(path.join(__dirname, 'favicon16.ico')));

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
 app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
         message: err.message,
         error: err
     });
 });
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
     message: err.message,
     error: {}
 });
});

module.exports = app;
