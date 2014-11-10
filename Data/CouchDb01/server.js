var request = require('request');

var server = ['http://127.0.0.1:5984/', 'http://192.168.2.30:5984/'];

request(server[0], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Get the JSON ack showing that the server is running
  }
})
