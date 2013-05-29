/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, devel: true, strict: true, node: true */

var CouchCode = (function() {'use strict';

	var nano = require('nano')('http://127.0.0.1:5984');

	function CouchCode() {

	}

	CouchCode.prototype.getCouchUrl = function() {
		return nano.config.url;
	};
	
	CouchCode.prototype.readDoc = function(response, docName, dbName) {
		var prog = nano.db.use(dbName);
    
	    prog.get(docName, function(error, existing) {
	        if(!error) { 
	            console.log(existing);
	            response.send(existing);
	        }  else {
	            console.log(error);
	            response.send(500, error);
	        }
	    });
	};
	
	var doInsert = function(response, data, docName, dbName) {
		console.log('doInsert called with database: ' + dbName)
		console.log('doInsert called with document: ' + docName);

		var prog = nano.db.use(dbName);
		prog.insert(data, docName, function(err, body) {
			console.log('In doInsert callback');
			if (!err) {
				console.log(body);
				response.send({
					"Result" : "Success"
				});
				return;
			} else {
				console.log(err);
				response.send(500, err);
				return;
			}
		});
	};

	CouchCode.prototype.sendToCouch = function(response, data, docName, dbName) {
		console.log('Send to Couch docName: ' + docName)
		console.log('Send to Couch dbName: ' + dbName)
		var prog = nano.db.use(dbName);
		prog.get(docName, function(error, existing) {
			if (!error) {
				console.log("Document exists. Doing Update.");
				// console.log(existing);
				console.log(existing._rev);
				data._rev = existing._rev;
				doInsert(response, data, docName, dbName);
			} else {
				console.log("Document does not exist. Doing insert.");
				// console.log(error);
				doInsert(response, data, docName, dbName);
			}
		});
	};
	
	var makeDatabase = function(response, dbName) {
		console.log('MakeDatabase: ' + dbName);
		nano.db.create(dbName, function(err, body) {
			if (!err) {
				console.log(body);
				response.send({ "Result" : "Success" });
			} else {
				console.log('Could not create database');
				console.log(err);
				response.send(500, err);
			}
		});
	};

	var dbExists = function(response, dbName) {
		nano.db.list(function(err, body) {
			var dbFound = false;
			// body is an array
			body.forEach(function(db) {
				console.log(db);
				if (db === dbName) {
					console.log('database exists');
					dbFound = true;
				}
			});
			
			// If dbName not found, create database			
			if (!dbFound) {
				makeDatabase(response, dbName);
			} else {
				response.send({'Result':'Database Exists'})
			}
		});
	};

	CouchCode.prototype.createDatabase = function(response, dbName) {
		dbExists(response, dbName);
	};

	

	return CouchCode;

})();

exports.couchCode = new CouchCode();
