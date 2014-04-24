var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

var port = process.env.PORT || 30025;

//app.use(logger('dev'));

var logger = require('morgan');

// app.use(logger());

app.use('/Scripts', function(req, res, next) {
    'use strict';
    console.log("Anon function called");
    console.log(req.url);
    next();
});

function charlie(req, res, next) {
    'use strict';
    console.log("Charlie called");
    console.log(req.url);
    next();
}

app.use(charlie);

app.use(express.static(path.join(__dirname, 'Tests')));
app.use('/Scripts', express.static(path.join(__dirname, 'Scripts')));

app.get('/', function(req, res) {
    'use strict';
    var htmlFiles = ['index.html', 'Tests/ArraySpec.html'];
    var html = fs.readFileSync(__dirname + '/' + htmlFiles[1]);
    res.writeHeader(200, {
        "Content-Type": "text/html"
    });
    res.write(html);
    res.end();
});

app.listen(port);
console.log('Listening on port :' + port);
