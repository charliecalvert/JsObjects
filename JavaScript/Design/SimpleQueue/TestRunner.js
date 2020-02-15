const express = require('express');
const app = express();
const fs = require('fs');

const logger = require('morgan');
const favicon = require('static-favicon');

app.use(logger('dev'));
app.use(favicon());

const port = process.env.PORT || 30025;

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
    'use strict';

    const html = fs.readFileSync(__dirname + '/tests/QueueSpec.html');
    response.writeHeader(200, {
        'Content-Type': 'text/html'
    });
    response.write(html);
    response.end();
});

app.use('/', express.static(__dirname + '/tests'));
app.use('/', express.static(__dirname + '/public'));

app.listen(port);
console.log('Using Jasmine to test. Open browser to view results.');
console.log('Listening on port :' + port);
