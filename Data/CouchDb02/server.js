var request = require('request');

var server = ['http://127.0.0.1:5984/', 'http://192.168.2.30:5984/'];
var index = 0;

console.log('Using: ' + server[index] + '\n');

request(server[index], function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); 
  }
})

console.log('Available databases:\n');

request(server[index] + '_all_dbs', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})

console.log('stats');

request(server[index] + '_stats', function (error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(typeof body);
      var data = JSON.parse(body);
      console.log(JSON.stringify(data, null, 4));
  }
})

