var express = require('express');
var app = express();

// For posts
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware. First getter the router from index.js
var router = require('./routes/index');
// Then tell express about our middleware
app.use('/', router);

app.use("/", express.static(__dirname + '/public'));

module.exports = app;
