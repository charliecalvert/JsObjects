var nano = require('nano')('http://localhost:5984');

var docName = 'bigName';

function insert() {
	nano.db.create('prog28201');
	var prog = nano.db.use('prog28201');

	prog.insert({ firstName: 'Suzie' }, docName, function(err, body) {
	  if (!err)
		console.log(body);
	});
}

var readIt = function() {
	var prog = nano.db.use('prog28201');
	prog.get(docName, { revs_info: true }, function(err, body) {
		if (!err)
			console.log(body);
	});
}

readIt();