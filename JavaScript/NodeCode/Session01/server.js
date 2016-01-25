// http://blog.modulus.io/nodejs-and-express-sessions
var express = require('express');
var path=require('path');
var app = express();
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = process.env.PORT || 30025;

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use(session({
    secret: '1234567890QWERTY'
})); */

var uuid = require('uuid');

app.use(session({
    genid: function(req) {
        return uuid.v4(); // use UUIDs for session IDs
    },
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

var previous = 'Previously you visited: ';

app.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync('public/index.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    console.log(html);
    response.end(html);
});

app.get('/page01', function(req, res) {
    'use strict';
    var info = "";
    if (req.session.lastPage) {
        info = previous + req.session.lastPage + '. ';
    }

    req.session.lastPage = '/page01';
    res.send('Welcome to Page01.<br />' + info);
});

app.get('/page02', function(req, res) {
    'use strict';
    var info = "";
    if (req.session.lastPage) {
        info = previous + req.session.lastPage + '. ';
    }

    req.session.lastPage = '/page02';
    res.send('Welcome to Page02.<br />' + info);
});

app.get('/page03', function(req, res) {
    'use strict';
    console.log(req.session);
    var info = "";
    if (req.session.lastPage) {
        info = previous + req.session.lastPage + '. ';
    }

    req.session.lastPage = '/page03';
    res.send('Welcome to Page03.<br />' + info);
});

app.use('/', express.static(__dirname + '/public'));
console.log('Listening on port: ', port);
app.listen(port);
