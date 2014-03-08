/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var format = require('util').format;
var fs = require('fs');
var qm = require('./Library/QueryMongo');
var queryMongo = qm.QueryMongo; 
var markdownName = "Presidents.md";

// Read the collection
app.get('/readAll', function(request, response) {'use strict';
	queryMongo.getAllDocuments(response);
});

app.get('/getDocumentCount', function(request, response) {'use strict';
	queryMongo.getDocumentCount(response);
});

app.get('/readTwo', function(request, response) { 'use strict';
	queryMongo.getDocuments(response, 2);
});

app.get('/readDocuments', function(request, response) { 'use strict';
	console.log("------------");
	console.log("Server side request for readRecords route");
	console.log("------------");
	console.log(request.query);
	var numToRead = parseInt(request.query.numRequested);
	console.log("Num to Read = " + numToRead);
	queryMongo.getDocuments(response, numToRead);
});

function message(message) {
	console.log("------------");
	console.log(message);
	console.log("------------");
}

app.get('/insertJson', function(request, response) { 'use strict';
	message("Server side request for newDocument route");
	var fileContent = fs.readFileSync('Presidents.json', 'utf8');
	queryMongo.insertIntoCollection(response, JSON.parse(fileContent));
});

app.get('/insertMarkdown', function(request, response) {
	message('insertMarkdown');
	var jsonObject = queryMongo.readMarkDown("Presidents", markdownName);
	queryMongo.insertIntoCollection(response, jsonObject);
});

app.get('/hello', function(request, response) { 'use strict';
	response.send('Hi there.');
});

app.get('/barfoo', function(request, response) { 'use strict';
	response.send('foobar');
});


app.get('/remove', function(request, response) {'use strict';
	console.log('/remove Called');
	queryMongo.removeById();	
	response.send({ result: "removeAll Called"});
});

app.get('/removeAll', function(request, response) {'use strict';
	console.log('/removeAll Called');
	queryMongo.removeAll(response);	
});

app.get('/readMarkdown', function(request, response) {
	console.log("readMarkdown called");
	var jsonObject = queryMongo.readMarkDown('Presidents', markdownName);
	response.send(jsonObject);
});


app.get('/readFileOut', function(request, response) {
	console.log('readFileOut called');
	queryMongo.readFileOut(response);
});

// Default.
app.get('/', function(request, result) {'use strict';
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, { "Content-Type" : "text/html" });
	result.write(html);
	result.end();
});

/*
app.get('/insertDocument', function(request, result) {
		
}); */

app.use("/", express.static(__dirname + '/Library'));
app.use("/Public/", express.static(__dirname + '/Public'));
app.use("/Tests/", express.static(__dirname + '/Tests'));
app.use("/Library/", express.static(__dirname + '/Library'));

app.listen(30025);
console.log('Listening on port 30025');
