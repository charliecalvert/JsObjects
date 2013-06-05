var couch = require('./Library/CouchCode')

var dbName = 'couchdocs01';
var data = "<!DOCTYPE=html><html><body><h1>Bar</h1></body></html>";
couch.couchCode.createDatabase(dbName, function(err) {
	if (!err) {
		couch.couchCode.couchAttach(null, 'bar', data, dbName);
	}
});