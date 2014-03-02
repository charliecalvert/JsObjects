/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var format = require('util').format;
var fs = require('fs');
var qm = require('./Library/QueryMongo');
var queryMongo = qm.QueryMongo; 

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

app.get('/newDocument', function(request, response) { 'use strict';
	console.log("------------");
	console.log("Server side request for newDocument route");
	console.log("------------");

	var fileContent = fs.readFileSync('Data.json', 'utf8');
	queryMongo.insertIntoCollection(JSON.parse(fileContent));
	response.send({ result: "Success" });
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
	response.send("remove Called");
});

// Default.
app.get('/', function(request, result) {'use strict';
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, { "Content-Type" : "text/html" });
	result.write(html);
	result.end();
});

app.use("/", express.static(__dirname + '/Library'));
app.use("/Public/", express.static(__dirname + '/Public'));
app.use("/Tests/", express.static(__dirname + '/Tests'));

app.listen(30025);
console.log('Listening on port 30025');
