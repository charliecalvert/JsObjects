/**
 * New node file
 */

var express = require('express');
var router = express.Router();
var format = require('util').format;
var fs = require('fs');
var qm = require('../Library/QueryMongo');
var queryMongo = qm.QueryMongo; 
var markdownName = "Presidents.md";


/* GET home page. 
 * Right now we are just auto-loading Public/index.html 
 */
/* router.get('/', function(req, res) {
	res.render('index', {
		title : 'Mongo Talk 05 Calvert'
	});
}); */

//Read the collection
router.get('/readAll', function(request, response) {'use strict';
	console.log("ReadAll route is called");
	queryMongo.getAllDocuments(response);
});

router.get('/getDocumentCount', function(request, response) {'use strict';
	queryMongo.getDocumentCount(response);
});

router.get('/readTwo', function(request, response) { 'use strict';
	queryMongo.getDocuments(response, 2);
});

router.get('/readDocuments', function(request, response) { 'use strict';
	console.log("------------");
	console.log("Server side request for readRecords route");
	console.log("------------");
	console.log(request.query);
	var numToRead = parseInt(request.query.numRequested);
	console.log("Num to Read = " + numToRead);
	queryMongo.getDocuments(response, numToRead);
});

function message(value) { 'use strict';
	console.log("------------");
	console.log(value);
	console.log("------------");
}

router.get('/insertJson', function(request, response) { 'use strict';
	message("Server side request for newDocument route");
	var fileContent = fs.readFileSync('Presidents.json', 'utf8');
	queryMongo.insertIntoCollection(response, JSON.parse(fileContent));
});

router.get('/insertMarkdown', function(request, response) { 'use strict';
	message('insertMarkdown route called');
	var jsonObject = queryMongo.readMarkDown("Presidents", markdownName);
	queryMongo.insertIntoCollection(response, jsonObject);
});

router.get('/update', function(request, response) { 'use strict';
	message('update route called');	
	queryMongo.updateCollection(response, request.query);
});

router.get('/remove', function(request, response) {'use strict';
	console.log('/remove Called');
	queryMongo.removeById();	
	response.send({ result: "removeAll Called"});
});

router.get('/removeAll', function(request, response) {'use strict';
	console.log('/removeAll Called');
	queryMongo.removeAll(response);	
});

router.get('/readMarkdown', function(request, response) { 'use strict';
	console.log("readMarkdown called");
	var jsonObject = queryMongo.readMarkDown('Presidents', markdownName);
	response.send(jsonObject);
});


router.get('/readFileOut', function(request, response) { 'use strict';
	console.log('readFileOut called');
	queryMongo.readFileOut(response);
});

// Default.
router.get('/', function(request, result) {'use strict';
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, { "Content-Type" : "text/html" });
	result.write(html);
	result.end();
});

module.exports = router;