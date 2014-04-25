var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
	'use strict';
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});   
	res.write(html);
	res.end();
});

app.get('/default', function(req, res){
	'use strict';
  var body = 'Sent with standard res write and end';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.write(body);
  res.end();
});

app.get('/express', function(req, res){
	'use strict';
  res.send('Sent with Express res.send');
});

app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
