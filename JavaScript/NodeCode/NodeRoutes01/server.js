var express = require('express');
var connect = require('connect');
var app = express();
var fs = require('fs');

// app.use(express.bodyParser());
app.use(connect.urlencoded());
app.use(connect.json());

var port = process.env.PORT || 30025;

app.get('/getNine', function(request, response) {
	console.log('getNine called');
	response.send({ "result": 9 });
});

// With a get, the parameters are passed in request.query
app.get('/add', function(request, response) {
	console.log('add called');	
	console.log(request.query);	
	var result = parseInt(request.query.operandA) + parseInt(request.query.operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/add', function(request, response) {
	console.log('add called');	
	console.log(request.body);	
	var result = parseInt(request.body.operandA) + parseInt(request.body.operandB);
	response.send({ "result": result });
});

app.get('/', function(request, response) {
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});   
	response.write(html);
	response.end();
});

app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
