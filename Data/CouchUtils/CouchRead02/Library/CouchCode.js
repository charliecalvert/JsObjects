/**
 * @author Charlie Calvert
 */

/*jshint jquery:true, browser:true, devel: true, strict: true, node: true */

var CouchCode = (function() {'use strict';

	var fs = require('fs');
	// var nano = require('nano')('http://127.0.0.1:5984');
	var nano = require('nano')('http://ccalvert:foobar@127.0.0.1:5984');

	function CouchCode() {

	}

	CouchCode.prototype.getCouchUrl = function() {
		return nano.config.url;
	};
	
/**
  * Create Database  
*/
	var makeDatabase = function(dbName, func) {
		console.log('MakeDatabase: ' + dbName);
		nano.db.create(dbName, function(err, body) {
			if (!err) {
				console.log('Database creation successful');
				func();
			} else {
				console.log('Could not create database');
				func(err);
			}
		});
	};

	CouchCode.prototype.createDatabase = function(dbName, func) {
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
				makeDatabase(dbName, func);
			} else {
				func()
			}
		});		
	};

/** 
 * ReadDoc
 */ 
	CouchCode.prototype.readDoc = function(docName, dbName, response) {
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
	
/* 
 * sendToCouch
*/	
	var doInsert = function(response, data, docName, dbName) {
		console.log('doInsert called with database: ' + dbName);
		console.log('doInsert called with document: ' + docName);
		console.log('doInsert called with data: ' + data);
		var prog = nano.db.use(dbName);
		prog.insert(data, docName, function(err, body) {
			console.log('In doInsert callback');
			if (!err) {
				console.log(body);
				if (response) {
					response.send({"Result" : "Success"});
				}
				return;
			} else {
				console.log(err);
				if (response) {
					response.send(500, err);
				}
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
				console.log("Document exists. Doing Update!");
				console.log(existing._rev);
				data._rev = existing._rev;
				doInsert(response, data, docName, dbName);
			} else {
				console.log("Document does not exist. Doing insert.");
				doInsert(response, data, docName, dbName);
			}
		});
	};

	/**
	 * Attachments
	 *
	 * If rev is null, this is an insert, else, it is an update
	 * See the attachUpdateHtml handler below
	 */
	var doAttachInsert = function(rev, response, docName, doc, dbName) {
		var prog = nano.db.use(dbName);
		prog.attachment.insert(docName, docName + '.html', doc, 'text/html', rev, function(err1, body) {
			if (!err1) {
				console.log('Attach Insert succeeded');
				if (response) {
					response.send({ "Result" : "Success" });
				}
			} else {
				console.log(err1);
				if (response) {
					err1.p282special = "Document conflict means document already exists. Try an update."
					response.send(500, err1);
				}
			}
		});
	}

	CouchCode.prototype.couchAttach = function(response, docName, doc, dbName) {
		console.log('/couchAttach called');
		var prog = nano.db.use(dbName);
		prog.get(docName, function(error, existing) {
			if (!error) {
				console.log('Attach Doc Exists: ' + existing._rev);
				doAttachInsert({ "rev" : existing._rev }, response, docName, doc, dbName);
			} else {
				console.log('New Attach Document');
				doAttachInsert(null, response, docName, doc, dbName);
			}
		});
	};
	
	CouchCode.prototype.getAttachedDocument = function(response, docName, dbName) {
	   console.log('getAttachedHtml called');   
	   var prog = nano.db.use(dbName);
	   prog.attachment.get(docName, docName, function(error, body) {
	        if (!error) {
	            console.log("---------------------------------");
	            console.log(body);
	            console.log("---------------------------------");
	            if (response) {
	            	response.send(body);
	            }
	        } else {
	        	console.log('Error in CouchCode.getAttachedDocument');
	            reportErrorPrivate(error);
	            if (response) {
	            	response.send(500, error);
	            }
	        }   
	    }); 
    };
    
    CouchCode.prototype.getAttachedHtml = function(response, docName, dbName) {
       console.log('getAttachedHtml called');   
       var prog = nano.db.use(dbName);
       prog.attachment.get(docName, docName, function(err, body) {
            if (!err) {
                console.log("---------------------------------");
                console.log(body);
                console.log("---------------------------------");
                if (response) {
                    response.writeHeader(200, {"Content-Type": "text/html"});
                    response.end(body);
                }
            } else {
                console.log('Error');
                console.log(err);
                if (response) {
                    response.send(500, err);
                }
            }   
        }); 
    };
    
    CouchCode.prototype.getAttachedImage = function(response, docName, dbName) {
        console.log('CouchCode.getAttachedBitmap called');   
        var prog = nano.db.use(dbName);
        prog.attachment.get('images', docName, function(err, body) {
             if (!err) {
                 console.log("---------------------------------");
                 var fileName = 'Images/' + docName;
                 console.log('Writing:' + fileName);
                 fs.writeFile(fileName, body, function() {
                	 if (response) {                     
                         response.send({'Result':'Success'});
                     }	 
                 });
                 console.log("---------------------------------");
             } else {
                 console.log('Error');
                 console.log(err);
                 if (response) {
                     response.send(500, err);
                 }
             }   
         }); 
     };
    
    var reportErrorPrivate = function(error) {
        console.log('==========================')
        console.log('Error: ' + error.error);
        console.log('Status Code: ' + error['status_code']);
        console.log('Reason: ' + error.reason);
        console.log('Description: ' + error.description); 
    }
    
	return CouchCode;

})();

exports.couchCode = new CouchCode();
