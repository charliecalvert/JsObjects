var couch = require('./Library/CouchCode');
var fs = require('fs');

var dbName = 'couchdocs02';
var docs = ['Data/person01.json', 'Data/person02.json', 'Data/person03.json'];
var docNames = ['person01', 'person02', 'person03'];
var attachments = ['Data/index.html', 'Data/week01.htm', 'Data/week02.htm', 'Data/cscGarden.png'];
var attachNames = ['index.html', 'week01.htm', 'week02.htm', 'cscGarden.png'];

function  attach(id) {
	if (id < attachments.length) {
		var fileName = attachments[id];
		fs.exists(fileName, function(exists) {
			if (exists) {
				var data = fs.readFileSync(fileName);
				
				couch.couchCode.createDatabase(dbName, function(error) {
					if (!error) {
						couch.couchCode.couchAttach(null, attachNames[id], data, dbName, id, function() {
							attach(id + 1);
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

function putDoc(id) {
	console.log('putDoc called with id of: ' + id);
	if (id < docs.length) {
		var fileName = docs[id];
		fs.exists(fileName, function(exists) {
			if (exists) {
				var data = fs.readFileSync(fileName);
				data = JSON.parse(data);
				couch.couchCode.createDatabase(dbName, function(error) {
					if (!error) {
						couch.couchCode.sendToCouch(null,  data, docNames[id], dbName, id, function() {
							putDoc(id + 1);
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

var run = function() {
	putDoc(0);
	attach(0);
};

run();
