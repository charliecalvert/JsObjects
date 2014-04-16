var express = require('express');
var app = express();
var fs = require('fs');

var logger = require('morgan');
var favicon = require('static-favicon');

app.use(logger('dev'));
app.use(favicon());

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

app.get('/', function(request, response) {
	var html = fs.readFileSync(__dirname + '/Tests/OsmaniSpec.html');
	response.writeHeader(200, {"Content-Type": "text/html"});   
	response.write(html);
	response.end();
});


app.use("/", express.static(__dirname + '/Tests'));
app.use("/Factories", express.static(__dirname + '/Factories'));

app.listen(port);
console.log('Listening on port :' + port);


