var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.port || 30025;
app.use(express.bodyParser());
var presidentsFileName = 'data/Presidents.json';

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {
		"Content-Type" : "text/html"
	});
	res.write(html);
	res.end();
});

app.get('/getPresidents', function(request, response) {
	var json = fs.readFileSync(presidentsFileName);
	response.send(json);
});

function writeToFile(fileName, json) {
	fs.writeFile(fileName, json, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("JSON saved to " + fileName);
			return {
				"result" : "success"
			};
		}
	});
}

// Use post when you want to send large chunks of data
app.post('/savePresidents', function(request, result) {
	console.log("savePresidents called");

	if ( typeof request.body == 'undefined') {
		console.log("request.body is not defined. Did you add app.use(express.bodyParser()); at top");
	} else {
		console.log(request.body);
		var details = request.body.details;
		var json = JSON.parse(request.body.data);
		console.log(details);
		json = JSON.stringify(json, null, 4);
		writeToFile(presidentsFileName, json);
	}
});

app.get('/putitem', function(request, result) {
	console.log(request.query.presidentName);
	console.log(request.query.born);
	console.log(request.query.died);
	writeToFile('temp.json', request.query)
	result.send(outcome);
});

app.get('/testAzureSimpleDb', function(req, res) {
	var html = fs.readFileSync('public/testAzureSimpleDb.html');
	res.writeHeader(200, {
		"Content-Type" : "text/html"
	});
	res.write(html);
	res.end();
});

app.use(express.static(__dirname + '/public'));

console.log("listening on Port: ", port);
app.listen(port); 