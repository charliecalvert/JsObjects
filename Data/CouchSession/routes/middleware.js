/**
 * Created by charlie on 11/14/16.
 */

var parseurl = require('parseurl');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var uuid = require('uuid');
var sessionstore = require('elf-sessionstore');
var passport = require('passport');
var setServer = require('./set-server');

/*****************************
 * SessionStore
 *****************************/

var sessionStore = sessionstore.createSessionStore({
    type: 'couchdb',
    host: setServer.serverUrl,
    port: 5984,
    dbName: setServer.dbName,
    collectionName: 'sessions',
    timeout: 10000
}, function(data) {
    'use strict';
    console.log('sessionStore callback', data);
});

/***** End Couch Sessions ************************************************/

/*********************************
 * Create Session Middleware
 *********************************/
router.use(session({
    genid: function(req) {
        'use strict';
        console.log('id generated');
        return uuid.v4(); // use UUIDs for session IDs
    },
    key: 'app.sess',
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store: sessionStore
}));

router.use(passport.initialize());
router.use(passport.session());

/***** Sessions Done ************************************************/

router.use(function(request, response, next) {
    'use strict';
    var views = request.session.views;

    if (!views) {
        views = request.session.views = {};
    }

    var pathname = parseurl(request).pathname;
    views[pathname] = (views[pathname] || 0) + 1;

    next();
});

module.exports = router;
