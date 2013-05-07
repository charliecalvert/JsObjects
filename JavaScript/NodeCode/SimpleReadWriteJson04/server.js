var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.get('/read', function(request, response){
	console.log('Read called: ' + JSON.stringify(request.query));
	var obj;
	
	function readData(err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		response.send(obj);
	}

	// Asynch call 
	fs.readFile(request.query.fileName, 'utf8', readData);
});

app.get('/write', function(request, response) {
    
    // We begin with some debug calls
    
    // View all the data that was sent
	console.log('Write called: ' + JSON.stringify(request.query));
	
	// Find both pieces of data: 
	var person = request.query.person;
	var path = request.query.path;
	
	// Display both pieces of data separately
	var personString = JSON.stringify(person, null, 4);
	console.log('PersonString: ' + personString);
	console.log('fileName: ' + JSON.stringify(path));
	
	// Now do our actual work of writing the file.
	// This assumes the path exists. See the mkdirp 
	// NPM library if you need to create directories
	fs.writeFile(path.fileName, personString, 'utf8', function(err, data){
		if (err) throw err;
		console.log('It\'s saved!');
	});
	
	// Send back a response
	response.send('{"result":"success"}');
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);