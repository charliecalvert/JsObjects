var request = require('request');

request('http://127.0.0.1:5984/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); 
  }
})


request('http://127.0.0.1:5984/_all_dbs', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})


