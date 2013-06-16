CouchMaster
==========

Load multiple documents at one time.

Declare an array of the documents you want to load:

~~~~
	var docs = ['Data/person01.json', 'Data/person02.json', 'Data/person03.json'];
	var docNames = ['person01', 'person02', 'person03'];
~~~~

Write a single function that takes a single integer as a parameter. This integer
will be an index into the array of names:

~~~~
function putDoc(index) {
	console.log('putDoc called with index of: ' + index);
	if (index < docs.length) {
		var fileName = docs[index];
		fs.exists(fileName, function(exists) {
			if (exists) {
				var data = fs.readFileSync(fileName);
				data = JSON.parse(data);
				couch.couchCode.createDatabase(dbName, function(error) {
					if (!error) {
						couch.couchCode.sendToCouch(null,  data, docNames[index], dbName, index, function() {
							putDoc(index + 1);
						});
					} else {
						couch.couchCode.reportError(error);
					}
				});
			} else {
				console.log('could not find: ' + fileName);
			}
		});
	} else {
		attach(0);
	}
}
~~~~

Then we pass the index and a callback into our sendToCouch function:

~~~~
	couch.couchCode.sendToCouch(null,  data, docNames[index], dbName, index, function() {
		putDoc(index + 1);
	});
~~~~

Note that we recursively call putDoc passing in the index plus one. The recursion ends
when the index passed into the function is larger than length of the array of fileNames:

	if (index < docs.length) {
		// Insert the docs
	} else {
		attach(0);
	}

Then, once all the documents are processed, the attach process is called, and each of
the attachments is sent to the database in a similar fashion:

~~~~
function  attach(index) {
	console.log('attach called with index of: ' + index);
	if (index < attachments.length) {
		var fileName = attachments[index];
		fs.exists(fileName, function(exists) {
			if (exists) {
				var data = fs.readFileSync(fileName);
				
				couch.couchCode.createDatabase(dbName, function(error) {
					if (!error) {
						couch.couchCode.couchAttach(null, attachNames[index], data, dbName, index, function() {
							attach(index + 1);
						});
					} else {
						couch.couchCode.reportError(error);
					}
				});
			} else {
				console.log('could not find: ' + fileName);
			}
		});
	}
}
~~~~

Needless to say, the relevant functions in CouchCode.js had to be modified to 
accept the index and the callback as parameters. I named the callback **next**:

~~~~
	var doInsert = function(response, data, docName, dbName, index, next) {
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
				next(index);
			} else {
				console.log(err);
				if (response) {
				response.send(500, err);
				}
			}
		});
	};
~~~~

As you can see, the only changes to the original code is in the parameter list, 
and in the single call to next:

	next(index);

Caveat: This code was written while I was grading finals. Another iteration would
probably enable me to find ways to simplify it, but one just pushes on during 
finals week.