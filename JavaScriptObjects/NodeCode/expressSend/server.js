var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	var html = fs.readFileSync('index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});   
	res.write(html);
	res.end();
});

app.get('/default', function(req, res){
  var body = 'Sent with standard res write and end';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.write(body);
  res.end();
});

app.get('/express', function(req, res){
  res.send('Sent with Express res.send');
});

app.listen(port);
console.log('Listening on port :' + port);