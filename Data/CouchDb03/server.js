var request = require('request');

var sayHello = function() {
	request('http://127.0.0.1:5984/', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		console.log(body); 
	  }
	})
}

var showDatabases = function() {
	request('http://127.0.0.1:5984/_all_dbs', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log(body);
	  	var bodyString = JSON.parse(body); 
	  	for (var i = 0; i < bodyString.length; i++) {
			console.log(bodyString[i]);
		}
	  }
	})
}

var createDatabase = function() {
	request.put('http://127.0.0.1:5984/prog282', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		console.log(body);
	  }
	})
}


var putData = function () {
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
}

var getDoc = function() {
	var req = 'http://localhost:5984/prog28201/_all_docs';
	request.get(req , function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		console.log(body);
	  } else {
		console.log(error);
	  }
	})
}  

var bigName = function() {
	var req = 'http://localhost:5984/prog28201/bigName';
	request.get(req , function (error, response, body) {
	  if (!error && response.statusCode == 200) {
		console.log(body);
		console.log('FirstName: ' + JSON.parse(body).firstName);
	  } else {
		console.log(error);
	  }
	})
}  
 
// sayHello();
showDatabases();
// getDoc();
// bigName();