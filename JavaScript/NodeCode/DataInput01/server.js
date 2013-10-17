var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// We need this here to make POST call work
app.use(express.bodyParser());

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.post('/addToFive', function(request, response) {
	console.log("AddToFive called");
	console.log("request.body: " + JSON.stringify(request.body));
	console.log("request.body.value: " + request.body.value);

	var newNumber = parseInt(request.body.value, 10) + 5;
	response.send( { result : "Success", value: newNumber } );
});

app.get('/addToNine', function(request, response) {
	console.log('AddToNine request.query: ' + JSON.stringify(request.query));
	console.log('AddToNine request.query.userNumber: ' + request.query.userNumber);
	var newValue = null;
	try {
		newValue = parseInt(request.query.userNumber, 10) + 9;
	} catch(error) {
		console.log(error);
	}
	response.send( { result : "Success", value: newValue } );
});

app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);