
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var walk = require('./public/javascripts/WalkJsObjects').walk;

var app = express();

// all environments
app.set('port', process.env.PORT || 30025);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/walk', function(request, response) {
	var dirToWalk = process.env.JSOBJECTS;
	// var dirToWalk = process.env.HOME + '/bin';
	walk(dirToWalk, 'Gruntfile.js', 'node_modules', function(err, data) {
		if (err) {
			console.log(err);
			response.send({ result: "Error", error: err});
		} else {
			console.log(data);
			response.send({ result: "Success", files: data});
		}
	});
	
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
