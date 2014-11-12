/*jshint jquery:true, browser:true, devel: true, strict: true */

var express = require('express');
var app = express();
var fs = require('fs');
var nano = require('nano')('http://localhost:5984');

var port = process.env.PORT || 30025;

var fileName = 'person.json';

app.get('/', function(req, res) {
	'use strict';
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {
		"Content-Type" : "text/html"
	});
	res.end(html);
});

var dbName = 'couch_db_08';
var docName = 'doc01';

app.get('/databaseName', function(request, response) {
	console.log("\/databaseName called.")
	response.send({ 'Result': dbName} );
});

app.get('/couchDbUrl', function(request, response) {
	console.log("couchDbUrl called.")
	response.send({ 'Result': nano.config.url} );
});

function insertAndCreateNew() {

}

app.get('/create', function(request, response) {
	'use strict';
	console.log('create called.');
	nano.db.create(dbName, function(err, body) {
		if (!err) {
			console.log(body);
		} else {
			console.log('Could not create database');
			console.log(err);
			response.send({
				'Result' : 'Database already exists.'
			});
		}
	});

	var nanoDb = nano.db.use(dbName);

	nanoDb.insert({
		firstName : 'Suzie',
		lastName : 'Fredrick',
		age : 38
	}, docName, function(err, body) {
		if (err) {
			console.log(body);
			response.send({
				'Result' : 'Failure'
			});
		} else {
			console.log(err);
			response.send({
				'Result' : 'Success'
			});
		}
	});

});

app.get('/read', function(request, response) { 'use strict';
	console.log('Read called: '	+ JSON.stringify(request.query));
	var nanoDb = nano.db.use(dbName);
	nanoDb.get(request.query.docName, { revs_info : true },
		function(err, body) {
			if (!err) {
				console.log("No error");
				console.log(body);
				response.send(body);
			} else {
				console.log("There was an error");
				response.send("No such record as: " + request.query.docName +
					". Use a the Get Doc Names button to find the name of an existing document.");
		}
	});
});

app.get('/docNames', function(request, response) {
	'use strict';
	var nanoDb = nano.db.use(dbName);
	var result = [];
	nanoDb.list(function(err, body) {
		if (!err) {
			body.rows.forEach(function(doc) {
				console.log(doc);
				result.push(doc.key);
			});
			console.log(result);
			response.send(result);
		} else {
			console.log(err);
			response.send(err);
			return;
		}
	});
});

app.get('/write', function(request, response) {
	'use strict';
	console.log('Write called: ' + request.query);
	var person = request.query;
	var personString = JSON.stringify(person, null, 4);
	console.log('PersonString: ' + personString);

	var nanoDb = nano.db.use(dbName);
	nanoDb.insert(person, person.docName, function(err, body) {
		if (!err) {
			console.log(body);
		} else {
			console.log(err);
			response.send(err);
			return;
		}
	});
	response.send({
		'Result' : 'Success'
	});
});

app.use("/", express.static(__dirname + '/public'));

console.log('CouchDb URL: ' + nano.config.url);
console.log('Listening on port :' + port);
app.listen(port);
