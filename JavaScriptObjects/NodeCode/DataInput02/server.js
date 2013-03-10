var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// We must include this near the top of the file
// if we want to handle POST
app.use(express.bodyParser());

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});


app.get('/addToNine', function(request, response) {
	console.log('AddToNine request: ' + request);
	console.log('AddToNine request.query: ' + request.query);
	console.log('AddToNine request.query.a: ' + request.query.a);
	try {
		var newValue = parseInt(request.query.a) + 9;
	} catch(error) {
		console.log(error);
	}
	response.send( { result : "Success", value: newValue } );
});

app.post('/addToFive', function(request, response) {
	console.log("AddToFive called");
	console.log(request.body);	
	var data = request.body;
	var newNumber = parseInt(data.value) + 5;
	console.log(data.value);

	response.send( { result : "Success", value: newNumber	} );
});

app.get('/read', function(req, res){
	var obj;
	
	function readData(err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.send(obj);
	}

	// Asynch call 
	fs.readFile('presidents.json', 'utf8', readData);
});

app.use("/public", express.static(__dirname + '/public'));


app.listen(port);
console.log('Listening on port :' + port);