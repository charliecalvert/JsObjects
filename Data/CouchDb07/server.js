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
var docName = 'doc02';

function insert() {

	nano.db.create(dbName);
	var prog = nano.db.use('prog28202');

	prog.insert({ firstName: 'Suzie', lastName: 'Fredrick', age: 38 }, docName, function(err, body) {
	  if (!err)
		console.log(body);
	});
}

app.get('/create', function(request, response){
	console.log('create called.');
	insert();
	response.send({'Result':'Success'});	
	
});

app.get('/read', function(request, response) {
	console.log('Read called: ' + request.query);

	var prog = nano.db.use(dbName);
	prog.get(docName, { revs_info: true }, function(err, body) {
		if (!err) {
			console.log(body);
			response.send(body);
		}
	});
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);