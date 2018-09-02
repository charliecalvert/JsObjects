//
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

var indexRouter = require('./routes/index');
app.use(express.static(path.join(__dirname, 'public')));

const uuid = require('uuid');

app.use(session({
    genid: function(req) {
        return uuid.v4(); // use UUIDs for session.pug IDs
    },
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use('/', indexRouter);

app.listen(port, () => console.log('Session01 listening on port', port + '.'));
