var nano = require('nano')('http://localhost:5984');

var docName = 'bigName';
var dbName = 'prog28201';

function insert() {
	nano.db.create(dbName);
	var prog = nano.db.use(dbName);

	prog.insert({ firstName: 'Suzie' }, docName, function(err, body) {
	  if (!err)
		console.log(body);
	});
}

var readIt = function() {
	var prog = nano.db.use(dbName);
	prog.get(docName, { revs_info: true }, function(err, body) {
		if (!err)
			console.log(body);
	});
}

insert();
readIt();