var express = require('express');
var router = express.Router();
var connect = require('./connect');
var scientists = require('../models/scientists');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: 'Angular Sign In'});
});

var allData;
var numberOfScientists = 0;
var totalScientistsSaved = 0;

function insertScientist(scientist, response) {
	if (!connect.connected) {
		connect.doConnection();
	}
	var newScientist = new scientists({
		"firstName": scientist.firstName,
		"lastName": scientist.lastName,
		"subject": scientist.subject,
		"subjects": scientist.subjects,
		"comments": scientist.comments
	});

	console.log('inserting', newScientist.lastName);

	newScientist.save(function(err) {
		console.log('saved: ', newScientist.lastName);
		totalScientistsSaved++;
		if (totalScientistsSaved === numberOfScientists) {
			//mongoose.disconnect();
			response.send({result: 'Success'});
		}
	});
}

function writeData(fileName, data) {
	var data = JSON.stringify(data, null, 4);
	fs.writeFile(fileName, data, function(err, data) {
		if (err) throw(err);
		console.log('success writing file');
	});
}

function readDataAndInsert(response) {
	fs.readFile('ValidScientists.json', function(err, scientists) {
		if (err) throw (err);
		numberOfScientists = scientists.length;
		scientists = JSON.parse(scientists);
		for (var i = 0; i < scientists.length; i++) {
			insertScientist(scientists[i], response);
		}
	});
}

router.get('/all-data', function(request, response) {
	console.log("AllData route invoked.");
	if (!connect.connected) {
		connect.doConnection();
	}

	console.log("About to find scientists.");
	scientists.find({}, function(err, data) {
		console.log(data.length);
		console.log(data[0]);
		allData = data;

		writeData('scientists.json', allData);

		response.send({
			result: 'Success',
			allData: data
		});
	});
});

router.post('/emptyCollection', function(request, response) {
	scientists.remove({}, function(err) {
		response.send({result: 'collection removed'});
	});
});

router.post('/insertValidCollection', function(request, response) {
	readDataAndInsert(response);
});

router.get('/:id', function(request, response) {
	response.render(request.params.id, {});
});

module.exports = router;
