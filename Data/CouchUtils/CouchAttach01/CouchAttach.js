var couch = require('./Library/CouchCode');
var fs = require('fs');

var getDbName = function() {
	var data = fs.readFileSync("config.json");
	data = JSON.parse(data);
	// console.log(data);
	return data.dbName; 
};

function run() {
	var docName = process.argv[2];
	var fileName = process.argv[3];
	
	var dbName = getDbName();
		
	fs.exists(fileName, function(exists) {
		if (exists) {
			var data = fs.readFileSync(fileName);
			
			couch.couchCode.createDatabase(dbName, function(error) {
				if (!error) {
					couch.couchCode.couchAttach(null, docName, data, dbName);
				} else {
					couch.couchCode.reportError(error);			    
				}
			});
		} else {
			console.log('could not find: ' + fileName);
		}
	});
};

function explain() {
	console.log('\n\nPlease pass in the docName you want to use in');
	console.log('couchDb and the name of the document you want');
	console.log('send to couchDb\n');
	console.log('Example: ');
	console.log('  node CouchAttach.js index index.html\n');
	console.log('Also edit config.json to specify the dbName you want to use');
	console.log('and the URL for your nano connection\n');
	console.log('Example config file: ');
	console.log('  {"dbName": "prog282-calvert", "nanoUrl": "http://127.0.0.1:5984"}');
};

//var dbFoo = getDbName();
//console.log(dbFoo);

if (process.argv.length === 4) {
	run();
} else {
	explain();
}