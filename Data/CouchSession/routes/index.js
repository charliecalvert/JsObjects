// var express = require('express');
var router = require('./Couch');
var dateFormat = require('dateformat');
var passport = require('passport');
// var previous;

var routeParamMiddleware = function(request, response, next) {
    'use strict';
    console.log('My middleware called by this route:', request.originalUrl);
    next();
};

/* GET home page. */
router.get('/', routeParamMiddleware, function(req, res, next) {
    'use strict';

    // In authentication callbacks we don't hit database to store session.
    // Here we say that the default is to store data
    // All those callbacks redirect to here, so we reset default here, automagically
    // See the setUser method in the facebook and google authentication files.
    req.session.elfStoreData = true;
    var dateNow = new Date();
    var date = dateFormat(dateNow, 'dddd, mmmm dS, yyyy');
    var time = dateFormat(dateNow, 'h:MM:ss TT');
    console.log(date);
    res.render('index', {
        title: 'Week09-SessionMaster',
        lastRefreshDate: date,
        lastRefreshTime: time
    });
});

router.get('/loginPage', routeParamMiddleware, function(req, res, next) {
    'use strict';
    var dateNow = new Date();
    var date = dateFormat(dateNow, 'dddd, mmmm dS, yyyy');
    var time = dateFormat(dateNow, 'h:MM:ss TT');
    console.log(date);
    res.render('login', {
        title: 'Week09-SessionMaster Login',
        lastRefreshDate: date,
        lastRefreshTime: time
    });
});

var pageReport = function(request, response) {
    'use strict';
    var previousPage = '';
    if (request.session.lastPage) {
        previousPage = request.session.lastPage;
    }

    request.session.lastPage = request.url;
    var welcome = 'Welcome to ' + request.url;
    console.log('welcome', welcome);
    response.send({
        currentPage: request.url,
        previousPage: previousPage,
        'session': request.session
    });
};
router.get('/page01', function(request, response) {
    'use strict';
    pageReport(request, response);
});

router.get('/page02', function(request, response) {
    'use strict';
    pageReport(request, response);
});

router.get('/page03', function(request, response) {
    'use strict';
    pageReport(request, response);
});

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function(user, done) {
    'use strict';
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    'use strict';
    done(null, obj);
});

router.get('/login', function(req, res) {
    'use strict';
    res.render('login', {
        user: req.user
    });
});

router.get('/logout', function(request, response) {
    'use strict';
    request.logout();
    request.session.login = {};
    response.send({
        status: 'Logged out'
    });
});

router.get('/login-status', function(request, response) {
    'use strict';
    console.log('login-status called');
    console.log('Auth: ' + request.isAuthenticated('google'));
    response.send({
        result: 'Success',
        authenticated: request.isAuthenticated(),
        login: request.session.login
    });
});

module.exports = router;
