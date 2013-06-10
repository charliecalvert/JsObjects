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

app.get("/couchReadAttached", function(request, response) {'use strict';
   console.log('/getAttachedHtml called');
   console.log(request.query);
   couch.couchCode.getAttachedDocument(response, request.query.docName, dbName);
});

app.get("/couchReadHtml", function(request, response) {'use strict';
   console.log('/getAttachedHtml called');
   console.log(request.query);
   couch.couchCode.getAttachedHtml(response, request.query.docName, dbName);
});

app.get('/couchReadImage', function(request, response) {'use strict';
	console.log('/readImage called');
	couch.couchCode.getAttachedImage(response, request.query.docName, dbName);
});	

app.use("/", express.static(__dirname + '/Public'));
app.use("/Library", express.static(__dirname + '/Library'));
app.use("/Images", express.static(__dirname + '/Images'));

console.log('CouchDb URL from Library/CouchCode: ' + couch.couchCode.getCouchUrl());
console.log('Listening on port: ' + port);
app.listen(port);