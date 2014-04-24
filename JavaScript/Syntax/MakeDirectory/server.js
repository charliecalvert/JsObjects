/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, devel: true, strict: true, node: true */

var express = require('express');
var app = express();
var fs = require('fs');
var files = require('./Library/ElvenFiles');
var newDirectory = "/bar";

var port = process.env.PORT || 30025;

app.get('/', function(request, response) {
    'use strict';
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var html = fs.readFileSync(__dirname + '/Public/index.html');
    response.end(html);
});

app.get('/createDirectory', function(request, response) {
    'use strict';
    console.log('createDirectory called');
    files.elvenFiles.createDirectory(__dirname + newDirectory);
    response.send({
        'result': 'success'
    });
});

app.get('/copyFile', function(request, response) {
    'use strict';
    console.log('createDirectory called');

    files.elvenFiles.copyFile(__dirname + '/README.md', __dirname + newDirectory + "/README.md");
    response.send({
        'result': 'success'
    });
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/Library", express.static(__dirname + '/Library'));
app.listen(port);
console.log('Listening on port :' + port);
