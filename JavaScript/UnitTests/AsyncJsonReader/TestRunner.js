var express = require('express');
var app = express();
var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');
var users = require('./routes/users');
var tests = require('./routes/tests');

app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(favicon());

var port = process.env.PORT || 30025;



app.use('/', tests);
app.use("/", express.static(__dirname + '/Tests'));
app.use("/public", express.static(__dirname + '/public'));

/// error handlers 
// The point is the signature: err, req, res, next. If the call does not have that
// signature, then these handlers won't be called.

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        'use strict';
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    'use strict';
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port);
console.log('Listening on port :' + port);
