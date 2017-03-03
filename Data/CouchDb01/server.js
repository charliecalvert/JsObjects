var request = require('request');
var setServer = require('../set-server');

request(setServer.serverUrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Get the JSON ack showing that the server is running
    }
});