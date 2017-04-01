var express = require('express');
var app = express();
var favicon = require('serve-favicon');

var port = process.env.PORT || 30025;

app.use(favicon(__dirname + '/public/favicon.png'));

app.get('/', function(request, response) {
    'use strict';
    response.sendFile(__dirname + '/public/index.html');
});

app.use("/", express.static(__dirname + '/public'));
app.listen(port);
console.log('Listening on port :' + port);
