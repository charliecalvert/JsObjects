var express = require('express');
var redis = require('redis');
var db = redis.createClient();
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(favicon(path.join(__dirname, '.', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    'use strict';
    var ua = req.headers['user-agent'];
    console.log(ua);
    console.log(next);
    db.zadd('online', Date.now(), ua, next);
});

app.use(function(req, res, next) {
    'use strict';
    var min = 60 * 1000;
    var ago = Date.now() - min;
    db.zrevrangebyscore('online', '+inf', ago, function(err, users) {
        if (err) return next(err);
        req.online = users;
        next();
    });
});

app.get('/', function(req, res) {
    'use strict';
    console.log('Online: ', req.online);
    res.send({
        'users_online': req.online.length,
        'req_online': req.online,
        'sessions': req.session
    });
});

app.listen(30025);
