var express = require('express');
var app = express();
var fs = require('fs');
var mod01 = require('./Library/Module01');
var mod02 = require('./Library/Module02');
app.use(express.bodyParser());

var port = process.env.PORT || 30025;

app.get('/getNine', function(request, response) {
	console.log('getNine called');
	response.send({ "result": mod01.getNine() });
});

// With a get, the parameters are passed in request.query
app.get('/add', function(request, response) {
	console.log('add called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var operandB = parseInt(request.query.operandB);
	var result = mod02.myObject.add(operandA, operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/add', function(request, response) {
	console.log('add called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var operandB = parseInt(request.body.operandB);
	var result = mod02.myObject.add(operandA, operandB);
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
