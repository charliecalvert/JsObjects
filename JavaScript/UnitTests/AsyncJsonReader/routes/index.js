var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
	'use strict';
	response.render('index', {
		title : 'Async JSON Reader'
	});
});

router.get('/read', function(request, response) {
	console.log('root read called: ' + JSON.stringify(request.query));
	var fileName = request.query.fileName;
	fs.readFile(fileName, 'utf8', function(error, data) {
		if (error) {
			response.send({ "Could_Not_Find_File": error, fileName: fileName});
			return;
		}
		
		try {
			var jsonObject = JSON.parse(data);
			console.log("Sending error");
			response.send(jsonObject);
		} catch(e) {			
			response.send({ "error": "Could not parse", "Could_Not_Parse_JSON": "error"});
		};		
	});
	
});

module.exports = router;
