/**
 * Created by charlie on 11/17/16.
 */

var express = require('express');
var router = express.Router();
var session = require('express-session');
var parseurl = require('parseurl');
var RedisStore = require('connect-redis');
import {createClient} from "redis"

// Initialize client.
let redisClient = createClient()
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
})

/* var sessionStore = sessionstore.createSessionStore({
    type: 'couchdb',
    host: 'http://192.168.2.19',  // optional
    port: 5984,                // optional
    dbName: 'sessionstore-calvert',// optional
    collectionName: 'sessions',// optional
    timeout: 10000             // optional
}); */



router.use(session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    //resave: true,
    //saveUninitialized: true,
    resave: false, // required: force lightweight session keep alive (touch)
    saveUninitialized: false, // recommended: only save session when data exists
    store: RedisStore
}));


router.use(function(request, response, next) {
    'use strict';
    var views = request.session.views;

    if (!views) {
        views = request.session.views = {};
    }

    // get the url pathname
    var pathname = parseurl(request).pathname;
    console.log('pathname', pathname);
    console.log('views', views);

    // count the views
    views[pathname] = (views[pathname] || 0) + 1;

    next();
});

module.exports = router;