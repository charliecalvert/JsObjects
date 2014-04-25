// http://blog.modulus.io/nodejs-and-express-sessions
var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 30025;
var sessionHelp = require('./Library/SessionHelper');

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.bodyParser());

var previous = 'Previously you visited: ';

app.get('/', function(request, response) {'use strict';
	var html = fs.readFileSync('Public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});
	console.log(html);
	response.end(html);
});

app.get('/page01', function(request, response) {'use strict';
	var info = "";
	if(request.session.lastPage) {
		info =	previous + request.session.lastPage + '. ';
	}
    
    var result = sessionHelp.sessionHelper.run(request);
	request.session.lastPage = '/page01';
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.end(result);
});

app.get('/page02', function(request, response) {'use strict';
	var info = "";
	if(request.session.lastPage) {
		info = previous + request.session.lastPage + '. ';
	}
    var result = sessionHelp.sessionHelper.run(request);
	request.session.lastPage = '/page02';
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.end(result);
});

app.get('/page03', function(request, response) {'use strict';
	console.log(request.session);
	var info = "";
	if(request.session.lastPage) {
		info = previous + request.session.lastPage + '. ';
	}

    var result = sessionHelp.sessionHelper.run(request);
	request.session.lastPage = '/page03';
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.end(result);
});

app.post('/addUser', function(request, response) {'use strict';
    console.log('/addUser called.');
    console.log(request.body);
    request.session.userName = request.body.userName;
    response.send({'Result': JSON.stringify(request.session)});
});

app.get('/users', function(request, response) {'use strict';
  response.send(request.session);
});

app.use('/', express.static(__dirname + '/Public'));
app.use('/', express.static(__dirname + '/Templates'));

// simple logger
app.use(function(request, response, next){'use strict';
  console.log('%s %s', request.method, request.url);
  next();
});

console.log('Listening on port: ', port);
app.listen(port);