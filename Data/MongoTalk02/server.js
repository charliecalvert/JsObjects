/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var fs = require('fs');
const QueryMongo = require('./QueryMongo');


// Express Code
app.get('/read', function(request, response) {
    console.log('read route called');
    var q = new QueryMongo();
    q.getData(response);
});

// Default.
app.get('/', function(request, result) {
    console.log('Default route called');
    var html = fs.readFileSync(__dirname + '/public/index.html');
    result.writeHeader(200, {
        "Content-Type": "text/html"
    });
    result.write(html);
    result.end();
});

// Give express access to the Public directory
app.use("/", express.static(__dirname + '/public'));

// Tell the webserver (and user) to listen on port 30025
app.listen(30025);
console.log('Listening on port 30025');
