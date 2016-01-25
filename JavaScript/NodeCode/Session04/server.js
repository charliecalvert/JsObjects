/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = process.env.PORT || 30025;
var sessionHelp = require('./library/SessionHelper');
var routes = require('./routes/base01'),
    user = require('./routes/user'),
    http = require('http'),
    fs = require('fs');

var app = express();
var previous = 'Previously you visited: ';

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
    secret: '1234567890QWERTY',
    resave:true,
    saveUninitialized: true
}));

/* app.configure(function() {
    'use strict';
    app.set('port', process.env.PORT || 30025);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(bodyParser());
    app.use(express.methodOverride());
    app.use(cookieParser('1234567ASDFG'));
    app.use(session());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    'use strict';
    app.use(express.errorHandler());
}); */

app.get('/', function(request, response) {
    'use strict';
    console.log('main route called: ' + JSON.stringify(request.session));
    request.session.visitCount = request.session.visitCount ? request.session.visitCount + 1 : 1;
    var html = fs.readFileSync('public/main.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.end(html);
});

app.get('/page01', function(request, response) {
    'use strict';
    // var info = "";
    /* if(request.session.lastPage) {
	info =  previous + request.session.lastPage + '. ';
	} */
    var result = sessionHelp.sessionHelper.run(request);
    request.session.lastPage = '/page01';
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.end(result);
});

app.get('/page02', function(request, response) {
    'use strict';
    var info = "";
    if (request.session.lastPage) {
        info = previous + request.session.lastPage + '. ';
    }
    var result = sessionHelp.sessionHelper.run(request);
    request.session.lastPage = '/page02';
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.end(result);
});

app.get('/page03', function(request, response) {
    'use strict';
    console.log(request.session);
    var info = "";
    if (request.session.lastPage) {
        info = previous + request.session.lastPage + '. ';
    }
    var result = sessionHelp.sessionHelper.run(request);
    request.session.lastPage = '/page03';
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.end(result);
});

app.get('/cookieData', function(request, response) {
    'use strict';
    console.log('CookieTest');
    response.cookie('cookieName01', request.session.userName, {
        maxAge: 900000,
        httpOnly: true
    });
    response.cookie('cookieName02', 'Sing like a bird.', {
        maxAge: 900000,
        httpOnly: true
    });
    response.cookie('cookieName03', request.query.cookieData, {
        maxAge: 900000,
        httpOnly: true
    });
    response.send({
        'Result': 'Success'
    });
});

app.get('/base01', routes.base01);
app.get('/users', user.list);

app.post('/addUser', function(request, response) {
    'use strict';
    console.log('/addUser called.');
    console.log(request.body);
    request.session.userName = request.body.userName;
    response.send({
        'Result': JSON.stringify(request.session)
    });
});

var port = process.env.PORT || 30025;
app.set('port', port);

http.createServer(app).listen(app.get('port'), function() {
    'use strict';
    console.log("Express server listening on port " + app.get('port'));
});
