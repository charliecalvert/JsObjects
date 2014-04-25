var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
	'use strict';
	var html = fs.readFileSync('Public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});

app.get('/launchSecondHtmlFile', function(request, response) {
	'use strict';
	console.log('launchSecondHtmlFile called');
	try {
		var html = fs.readFileSync('Public/SecondFile.html');
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.end(html);
	} catch(error) {
		console.log(error);
	}
});

app.use("/Public", express.static(__dirname + '/Public'));

app.listen(port);
console.log('Listening on port :' + port);