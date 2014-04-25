/* jshint node: true, unused: true */

var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync('public/index.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.end(html);
});

app.get('/dirName', function(request, response) {
    'use strict';
    response.send(__dirname);
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/FakeRoute", express.static(__dirname + '/Folder02'));

app.listen(port);
console.log('Listening on port :' + port);
