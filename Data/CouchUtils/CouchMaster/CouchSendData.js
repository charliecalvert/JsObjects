var couch = require('./Library/CouchCode');
var fs = require('fs');

var dbName = 'couchdocs02';
var docs = ['Data/person01.json', 'Data/person02.json', 'Data/person03.json'];
var docNames = ['person01', 'person02', 'person03'];
var attachments = ['Data/index.html', 'Data/week01.htm', 'Data/week02.htm', 'Data/cscGarden.png'];
var attachNames = ['index.html', 'week01.htm', 'week02.htm', 'cscGarden.png'];

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

var run = function() {
	putDoc(0);
};

run();
