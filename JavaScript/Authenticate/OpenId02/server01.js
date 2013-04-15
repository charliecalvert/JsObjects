var openid = require('openid');
var querystring = require('querystring');
var express = require('express');
var app = express();

var url = require('url');
var querystring = require('querystring');
var relyingParty = new openid.RelyingParty(
	'http://localhost:30025/go', // Verification URL (yours)
	null, // Realm (optional, specifies realm for OpenID authentication)
	false, // Use stateless verification
	false, // Strict mode
	[]
);
// List of extensions to enable and include

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
	// Deliver an OpenID form on all other URLs
	res.writeHead(200);
	res.end('<!DOCTYPE html><html><body>' + '<form method="get" action="/authenticate">' + '<p>Login using OpenID</p>' + '<input name="openid_identifier" />' + '<input type="submit" value="Login" />' + '</form></body></html>');
});

app.get('/go', function(request, res) {
	console.log("In Go Callback");
	var query = request.query;
	console.log(query);
	console.log(query['openid.claimed_id']);
	relyingParty.verifyAssertion(request, function(error, result) {
		var isGood = !error && result.authenticated ? '<h1>Success!</h1>' : '<h1>Failed</h1>'
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(isGood);
		res.write('<p>' + query['openid.assoc_handle'] + '</p>');
		res.write('<p>' + query['openid.claimed_id'] + '</p>');
  		res.write('<p>' + query['openid.identity'] + '</p>');
  		res.write('<p>' + query['openid.mode'] + '</p>');
  		res.write('<p>' + query['openid.ns'] + '</p>');
		res.write('<p>' + query['openid.op_endpoint'] + '</p>');
		res.write('<p>' + query['openid.response_nonce'] + '</p>');
		res.write('<p>' + query['openid.return_to'] + '</p>');
		res.write('<p>' + query['openid.sig'] + '</p>');
		res.write('<p>' + query['openid.signed'] + '</p>'); 
		res.end('bye');
	});
});

app.get('/authenticate', function(req, res) {
	console.log("Authenticate called");
	console.log(req.query);
	// User supplied identifier
	var query = querystring.parse(req.query);
	console.log("Parsed Query: " + query);
	var identifier = req.query.openid_identifier;
	console.log("identifier: " + identifier);

	// Resolve identifier, associate, and build authentication URL
	relyingParty.authenticate(identifier, false, function(error, authUrl) {
		if (error) {
			res.writeHead(200);
			res.end('Authentication failed: ' + error.message);
		} else if (!authUrl) {
			res.writeHead(200);
			res.end('Authentication failed');
		} else {
			res.writeHead(302, {
				Location : authUrl
			});
			res.end();
		}
	});
});


app.use("/Public", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
