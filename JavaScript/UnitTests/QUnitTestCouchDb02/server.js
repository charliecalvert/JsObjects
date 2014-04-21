/**
 * @author Charlie Calvert
 */

/*jshint devel: true, jquery: true, strict: true, node: true */

var express = require('express');
var app = express();
var fs = require('fs');
var querystring = require('querystring');

var couch = require('./Library/CouchCode');

var port = process.env.PORT || 30025;
var dbName = 'unit_test02';

// We need this here to make POST call work
app.use(express.bodyParser());

app.get('/', function(req, res) {'use strict';
    var html = fs.readFileSync('Public/index.html');
    res.writeHeader(200, {
        "Content-Type" : "text/html"
    });
    res.end(html);
});

app.get('/createDatabase', function(request, response) {
	'use strict';
	console.log('Create Database');
	couch.couchCode.createDatabase(response, dbName);
	console.log('couchWriteState database Created');
});
    

app.get('/couchWriteState', function(request, response) {
	'use strict';
	//debugger;
	console.log('couchWriteState');
	for (var props in request.query) {
		console.log(props);
	    couch.couchCode.sendToCouch(response, request.query[props], props, dbName);
	}
	response.send({'Result': 'Success'});
});

app.get('/couchWriteGrids', function(request, response) {
	'use strict';
	// debugger;
	console.log('couchWriteState');
	var grids = request.query;
    couch.couchCode.sendToCouch(response, grids, 'all_in_one', dbName);
	response.send({'Result': 'Success'});
});

app.get('/couchReadDoc', function(request, response) {
	'use strict';
	console.log('couchReadDoc: ' + request.query.docName);
	couch.couchCode.readDoc(response, request.query.docName, dbName);
});


app.use("/", express.static(__dirname + '/Public'));
app.use("/Library", express.static(__dirname + '/Library'));
// app.use("/", express.static(__dirname + '/SaveData'));

console.log('CouchDb URL from Library/CouchCode: ' + couch.couchCode.getCouchUrl());
console.log('Listening on port: ' + port);
app.listen(port);

