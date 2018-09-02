// http://blog.modulus.io/nodejs-and-express-sessions
var express = require('express');
var path=require('path');
var app = express();
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var port = process.env.PORT || 30025;
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.set('view engine', 'pug');

app.use(cookieParser());

const uuid = require('uuid');

app.use(session({
    genid: function(req) {
        return uuid.v4(); // use UUIDs for session.pug IDs
    },
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.get('/', function(request, response) {
    'use strict';
    response.sendFile(path.join(__dirname + '/public/index.html'));
});

function getLastpage(sessionPage) {
    let lastPage = 'This is the first page you have visited.';
    const previous = 'Previously you visited: ';
    if (sessionPage) {
        lastPage = previous + sessionPage + '.';
    }
    return lastPage;
}

// https://stackoverflow.com/a/1026087
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function display(request, response, lastPage) {
    console.log(request.session);
    console.log(request.cookies);
    const page = capitalizeFirstLetter(request.params.id);
    response.render('session', {title: page, lastPage: lastPage});
}

app.get('/:id', function(request, response) {
    'use strict';
    const lastPage = getLastpage(request.session.lastPage);
    request.session.lastPage = request.params.id;
    display(request, response, lastPage);
});

app.listen(port, () => console.log('Session01 listening on port', port + '.'));
