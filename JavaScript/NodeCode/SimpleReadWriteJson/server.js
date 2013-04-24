var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

var fileName = 'person.json';

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.get('/read', function(request, response){
	console.log('Read called.');
	var obj;
	
	function readData(err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		response.send(obj);
	}

	// Asynch call 
	fs.readFile(fileName, 'utf8', readData);
});

app.get('/write', function(request, response) {
	console.log('Write called: ' + request.query);
	var person = request.query;
	var personString = JSON.stringify(person, null, 4);
	console.log('PersonString: ' + personString);
	fs.writeFile(fileName, personString, 'utf8', function(err, data){
		if (err) throw err;
		console.log('It\'s saved!');
	});
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);