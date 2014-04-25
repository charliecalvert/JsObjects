// http://blog.modulus.io/nodejs-and-express-sessions
var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 30025;

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

var previous = 'Previously you visited: ';

app.get('/', function(request, response) {
	'use strict';
	var html = fs.readFileSync('public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});
	console.log(html);
	response.end(html);
});

app.get('/page01', function(req, res) {
	'use strict';
	var info = "";
	if(req.session.lastPage) {
		info =	previous + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page01';
	res.send('Welcome to Page01.<br />' + info);
});

app.get('/page02', function(req, res) {
	'use strict';
	var info = "";
	if(req.session.lastPage) {
		info = previous + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page02';
	res.send('Welcome to Page02.<br />' + info);
});

app.get('/page03', function(req, res) {
	'use strict';
	console.log(req.session);
	var info = "";
	if(req.session.lastPage) {
		info = previous + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page03';
	res.send('Welcome to Page03.<br />' + info);
});

app.use('/', express.static(__dirname + '/public'));
console.log('Listening on port: ', port);
app.listen(port);