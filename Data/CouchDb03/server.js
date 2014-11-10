var request = require('request');

var servers = ['http://127.0.0.1:5984/', 'http://192.168.2.30:5984/'];
var index = 0;
var databaseName = 'bcdata';

function showJson(json) {
    var data = JSON.parse(json);
    console.log(JSON.stringify(data, null, 4));
}

var sayHello = function() {
    request(servers[index], function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); 
      }
    })
}

var showDatabases = function() {
    var command = servers[index] + '_all_dbs';
    console.log("showDatabases called with: ", command);
    request(command, function (error, response, body) {
        if(error) {
            console.log(error);
        } else if (response.statusCode == 200) {
            console.log(body);
            var bodyString = JSON.parse(body); 
            for (var i = 0; i < bodyString.length; i++) {
                console.log(bodyString[i]);
            }
        } else {
            console.log("Error status code: ", response.statusCode);
        }
    })
}

var createDatabase = function() {
    request.put(servers[index] + databaseName, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    })
}


var putData = function () {
    var data = {
        "first_name": "Sarah",
        "last_name": "Patton", 
        "age": 3
    };

    var postum = servers[index] + databaseName + ' -d "' +  JSON.stringify(data) + '" -H "Content-Type: application/json"';
    console.log(postum);
    request.post(postum, 
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('Insert Data');
                console.log(body);
            } else {
                console.log(showJson(response.body));
            }
    });
}

var getDoc = function() {
    var req = servers[index] + databaseName + '/_all_docs';
    request.get(req , function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
        console.log(error);
      }
    })
}  

var bigName = function() {
    var req = servers[index] + databaseName + '/bigName';
    request.get(req , function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        console.log('FirstName: ' + JSON.parse(body).firstName);
      } else {
        console.log(error);
      }
    })
}  
 
sayHello();
showDatabases();
createDatabase();
putData();
getDoc();
bigName();
