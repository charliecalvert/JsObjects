var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname + '/Tests')));


app.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync(__dirname + '/Tests/BoatFactorySpec.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
});

var port = process.env.PORT || 30025;

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

console.log("DirName: " + __dirname);

app.listen(port);
console.log('Listening on port :' + port);
