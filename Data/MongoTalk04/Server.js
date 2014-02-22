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
	queryMongo.getCollection(response);
});

app.get('/readTwo', function(request, response) { 'use strict';
	queryMongo.getCollectionCount(response, 2);
});

app.get('/newRecord', function(request, response) { 'use strict';
	var fileContent = fs.readFileSync('Data.json', 'utf8');
	queryMongo.insertIntoCollection(JSON.parse(fileContent));
	response.send({ result: "Success" });
});

app.get('/hello', function(request, response) { 'use strict';
	response.send('Hi there.');
});

// Default.
app.get('/', function(request, result) {'use strict';
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, { "Content-Type" : "text/html" });
	result.write(html);
	result.end();
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/", express.static(__dirname + '/Library'));

app.listen(30025);
console.log('Listening on port 30025');
