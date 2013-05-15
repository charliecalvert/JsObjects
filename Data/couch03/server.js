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


request.put('http://127.0.0.1:5984/prog282', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})

var data = {
	"firstName": "Sarah",
	"lastName": "Patton", 
	"age": 3
};

request.post('http://localhost:5984/prog282 -d data -H "Content-Type: application/json"' , function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})

  
