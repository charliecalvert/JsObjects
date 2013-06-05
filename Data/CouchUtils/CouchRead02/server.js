/*jshint jquery:true, browser:true, devel: true, strict: true */

var express = require('express');
var couch = require('./Library/CouchCode');
var fs = require('fs');
var qs = require('querystring');

var app = express();
var dbName = 'couchdocs01';
var port = process.env.PORT || 30025;


app.get('/couchReadDoc', function(request, response) {;
	console.log('couchReadDoc: ' + request.query.docName);
	couch.couchCode.readDoc(request.query.docName, dbName, response);
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/Library", express.static(__dirname + '/Library'));

console.log('CouchDb URL from Library/CouchCode: ' + couch.couchCode.getCouchUrl());
console.log('Listening on port: ' + port);
app.listen(port);