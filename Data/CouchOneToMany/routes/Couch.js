/**
 * @name Couch
 * @author: Charlie Calvert
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var servers = ['http://127.0.0.1:5984', 'http://192.168.2.21:5984'];
// var nano = require('nano')('http://ccalvert:foobar@192.168.2.21:5984');
// var nano = require('nano')('http://ccalvert:foobar@localhost:5984');
var nano = require('nano')(servers[0]);

var dbName = 'one_to_many';
var docName = 'phones';

router.get('/databaseName', function(request, response) {
	'use strict';
	console.log("\/databaseName called.");
	response.send({
		'Result' : dbName
	});
});

var firstAndLast = function(doc) {
	'use strict';
	if (doc.firstName && doc.lastName) {
		var name = doc.firstName + ' ' + doc.lastName;
		emit(doc._id, name);
	}
};

var lastOnly = function(doc) {
	'use strict';
	if (doc.firstName && doc.lastName) {
		var name = doc.lastName;
		emit(doc._id, name);
	}
};

router.get('/designDoc', function(request, response) {
	'use strict';
	console.log("Design Doc Called");

	var nanoDb = nano.db.use(dbName);
	nanoDb.insert({
		"views" : {
			"firstAndLast" : {
				"map" : firstAndLast
			}
		}
	}, '_design/people', function(error, body) {
		if (!error) {
			console.log(body);
			response.send({
				'Result' : 'Success',
				'body' : body
			});
		} else {
			console.log("error: " + error);
			response.send({
				'Result' : 'The document might already exist. ' + error
			});
		}
	});

});

router.get('/view01', function(request, response) {
	'use strict';
	console.log("view Called");

	var nanoDb = nano.db.use(dbName);
	nanoDb.view('people', 'firstAndLast', function(err, body) {
		if (!err) {
			var result = [];
			body.rows.forEach(function(doc) {
				result.push(doc);
				console.log(doc.value);
			});
			var html = templater.template.addNames('Templates/Basic.html',
					result);
			response.send(html);
		} else {
			console.log(err);
			response.send(500, err);
		}
	});
});

router.get('/listDb', function(request, response) {
	nano.db.list(function(err, body) {
		response.send(body);
		body.forEach(function(db) {
			console.log(db);
		});
	});
});

router.get('/deleteDb', function(request, response) {
	nano.db.destroy(dbName, function(err, body) {
		if (err) {
			response.send({
				'Result' : 'Failure'
			});
		} else {
			response.send({
				'Result' : 'Success'
			});
		}
	});
});

router.get('/createDb', function(request, response) {

	console.log('create called.');
	nano.db.create(dbName, function(err, body) {
		if (!err) {
			console.log(body);
			response.send(200, body);
		} else {
			console.log('Could not create database');
			console.log(err);
			response.send(500, err);
			return;
		}
	});
});

var putBulkData = function (bulkData, response) {
	'use strict';
    var req = {
        "method": "POST",
        "uri": servers[0] + '/' + dbName + "/_bulk_docs",
        "headers": { 
            'content-type': 'application/json', 
            'accept'      : 'application/json'
        },
        "json": bulkData
    };
    console.log(req);
    request.post(req, 
        function (error, errorResponse, body) {
            if (!error && errorResponse.statusCode == 200) {
                console.log('Insert Data');
                console.log(body);
                response.send({"result": "success", "data": body});
            } else {
                //console.log(showJson(response.body));
                console.log(errorResponse.body);
                response.send({"result": "error", "data": errorResponse.body});
            }
    });
};

router.get('/createPhones', function(request, response) {
	'use strict';

	console.log('use database');	
	var record = fs.readFile('Phones.json' , 'utf8', function(err, json) {
		console.log("Reading file");
		console.log(json);
		putBulkData(JSON.parse(json), response);
	});
});

router.get('/read', function(request, response) {
	'use strict';
	console.log('Read called: ' + JSON.stringify(request.query));

	var nanoDb = nano.db.use(dbName);
	nanoDb.get(request.query.docName, {
		revs_info : true
	}, function(err, body) {
		if (!err) {
			console.log(body);
			response.send(body);
		} else {
			var cscMessage = "No such record as: " + request.query.docName +
					". Use a the Get Doc Names button to find " +
					"the name of an existing document.";
			err.p282special = cscMessage;
			response.send(500, err);
		}

	});
});

router.get('/docNames', function(request, response) {
	'use strict';
	// var url = 'http://localhost:5984/prog28202/_all_docs';
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
			response.send(500, err);
			return;
		}
	});
});

router.get('/write', function(request, response) {
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

router.get("/attachPng", function(request, response) {
	'use strict';
	console.log('/attachPng called');
	var fs = require('fs');

	fs.readFile('Images/rabbit.png', function(err, data) {
		if (!err) {
			var nanoDb = nano.db.use(dbName);
			nanoDb.attachment.insert('rabbit', 'rabbit.png', data, 'image/png',
					{
						rev : '12-150985a725ec88be471921a54ce91452'
					}, function(err, body) {
						if (!err) {
							console.log(body);
						} else {
							console.log(err);
						}
					});
		}
	});
});

/**
 * If rev is null, this is an insert, else, it is an update See the
 * attachUpdateHtml handler below
 */
var doInsert = function(rev, response) {

	function callback(err, data) {
		if (!err) {
			var nanoDb = nano.db.use(dbName);
			var a = nanoDb.attachment;
			a
					.insert(
							'attachMe',
							'AttachMe.html',
							data,
							'text/html',
							rev,
							function(err1, body) {
								if (!err1) {
									console.log(body);
									response.send({
										"Result" : "Success"
									});
								} else {
									console.log(err1);
									err1.p282special = "Document conflict means document already exists. Try an update.";
									response.send(500, err1);
								}
							});
		} else {
			console.log(err);
			response.send(500, err);
		}
	}

	fs.readFile(__dirname + '/Templates/AttachMe.html', callback);
};

router.get("/attachHtml", function(request, response) {
	'use strict';
	console.log('/attachHtml called');
	// Null means we are trying to do an insert
	doInsert(null, response);
});

router.get("/getAttachedHtml", function(request, response) {
	'use strict';
	console.log('/getAttachedHtml called');

	var nanoDb = nano.db.use(dbName);
	nanoDb.attachment.get('attachMe', 'AttachMe.html', function(err, body) {
		if (!err) {
			console.log(body);
			response.send(body);
		} else {
			console.log(err1);
			response.send(500, err);
		}
	});
});

router.get("/attachUpdateHtml", function(request, response) {
	'use strict';
	console.log('/attachUpdate called');
	var nanoDb = nano.db.use(dbName);
	nanoDb.get('attachMe', function(error, existing) {
		if (!error) {
			console.log(existing);
			console.log(existing._rev);
			doInsert({
				"rev" : existing._rev
			}, response);
		} else {
			console.log(error);
			response.send(500, error);
		}
	});
});

module.exports = router;
