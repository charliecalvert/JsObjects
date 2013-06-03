// http://blog.modulus.io/nodejs-and-express-sessions
var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

var previous = 'Previously you visited: ';

app.get('/page01', function(req, res) {
	var info = "";
	if(req.session.lastPage) {
		info =	previoius + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page01';
	res.send('Welcome to Page01: ' + info);
});

app.get('/page02', function(req, res) {
	var info = "";
	if(req.session.lastPage) {
		info = previous + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page02';
	res.send('Welcome to Page02 ' + info);
});

app.get('/page03', function(req, res) {
	console.log(req.session);
	var info = "";
	if(req.session.lastPage) {
		info = previous + req.session.lastPage + '. ';
	}

	req.session.lastPage = '/page03';
	res.send('Welcome to Page03: ' + info);
});

app.listen(process.env.PORT || 30025);