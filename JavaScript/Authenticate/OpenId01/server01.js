var openid = require('openid');
var querystring = require('querystring');
var express = require('express');
var app = express();

// var url = require('url');
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

app.get('/', function(reqest, response) {
    'use strict';
    // Deliver an OpenID form on all other URLs
    response.writeHead(200);
    response.end('<!DOCTYPE html><html><body>' + '<form method="get" action="/authenticate">' + '<p>Login using OpenID</p>' + '<input name="openid_identifier" />' + '<input type="submit" value="Login" />' + '</form></body></html>');
});

app.get('/go', function(request, response) {
    'use strict';
    relyingParty.verifyAssertion(request, function(error, result) {
        response.writeHead(200);
        response.end(!error && result.authenticated ? 'Success :)' : 'Failure :(');
    });
});

app.get('/authenticate', function(request, response) {
    'use strict';
    console.log("Authenticate called");
    console.log(request.query);
    // User supplied identifier
    var query = querystring.parse(request.query);
    console.log("Parsed Query: " + query);
    var identifier = request.query.openid_identifier;
    console.log("identifier: " + identifier);

    // Resolve identifier, associate, and build authentication URL
    relyingParty.authenticate(identifier, false, function(error, authUrl) {
        if (error) {
            response.writeHead(200);
            response.end('Authentication failed: ' + error.message);
        } else if (!authUrl) {
            response.writeHead(200);
            response.end('Authentication failed');
        } else {
            response.writeHead(302, {
                Location: authUrl
            });
            response.end();
        }
    });
});

/*
app.get('/verify', function() {
	console.log("Verify called");
	// Verify identity assertion
	// NOTE: Passing just the URL is also possible
	relyingParty.verifyAssertion(req, function(error, result) {
		res.writeHead(200);
		res.end(!error && result.authenticated ? 'Success :)' : 'Failure :(');
	});
}); */

app.use("/Public", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
