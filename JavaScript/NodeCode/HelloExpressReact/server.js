var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(request, response) {
    'use strict';
    response.sendFile(__dirname + '/public/index.html');
});

app.use("/", express.static(__dirname + '/public'));
app.listen(port);
console.log('Listening on port :' + port);
