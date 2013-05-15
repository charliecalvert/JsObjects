var express = require('express');
var app = express();
var fs = require('fs');
var nano = require('nano')('http://localhost:5984');

var port = process.env.PORT || 30025;

var fileName = 'person.json';

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});

var dbName = 'prog28202';
var docName = 'doc03';

function insertAndCreateNew() {

	nano.db.create(dbName);
	var prog = nano.db.use(dbName);

	prog.insert({ firstName: 'Suzie', lastName: 'Fredrick', age: 38 }, docName, function(err, body) {
	  if (!err)
		console.log(body);
	});
}

app.get('/create', function(request, response){
	console.log('create called.');
	insertAndCreateNew();
	response.send({'Result':'Success'});	
	
});

app.get('/read', function(request, response) {
	console.log('Read called: ' + JSON.stringify(request.query));

	var prog = nano.db.use(dbName);
	prog.get(request.query.docName, { revs_info: true }, function(err, body) {
		if (!err) {
			console.log(body);
			response.send(body);
		}
	});
});

app.get('/docNames', function(request, response) {
	var url = 'http://localhost:5984/prog28202/_all_docs';
	var prog = nano.db.use(dbName);
	var result = [];
	prog.list(function(err, body) {
  		if (!err) {
	    	body.rows.forEach(function(doc) {
	      		console.log(doc);
	      		result.push(doc.key);
	    	});
	    	console.log(result);
  			response.send(result);
    	} else {
    		console.log(err);
    		response.send(err);
    		return;
    	}    	
  	});
});

app.get('/write', function(request, response) {
	console.log('Write called: ' + request.query);
	var person = request.query;
	var personString = JSON.stringify(person, null, 4);
	console.log('PersonString: ' + personString);
	
	var prog = nano.db.use(dbName);
	prog.insert(person, person.docName, function(err, body) {
	  if (!err) {
		console.log(body);
	  } else {
	  	console.log(err);
	  	response.send(err);
	  	return;
	  }
	});
	response.send({'Result':'Success'});	
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);