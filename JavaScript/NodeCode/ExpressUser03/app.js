/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function() {
    'use strict';
    app.set('port', process.env.PORT || 30025);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
    'use strict';
    app.use(express.errorHandler());
});

app.get('/', routes.index);
// app.get('/about', routes.about);

app.get('/about', function(req, res) {
    'use strict';
    res.render('about', {
        title: 'About'
    });
});

app.get('/links', function(req, res) {
    'use strict';
    res.render('links', {
        title: 'Links'
    });
});

app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
    'use strict';
    console.log("Express server listening on port " + app.get('port'));
});
