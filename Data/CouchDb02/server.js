var setServer = require('../set-server');
var request = require('request');

//var server = ['http://127.0.0.1:5984/', 'http://192.168.2.30:5984/'];
// var index = 0;
var server = setServer.serverUrl + '/';

console.log('CouchDb02 Using: ' + server + '\n');

function basics() {
    request(server, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("BODY:", body); 
      } else {
          console.log(error);
      }
    })
}




const available_databases = true;
if (available_databases) {
    console.log('Available databases:\n');

    request(server + '_all_dbs', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
          console.log(error);
      }
    })

}


function stats() {
    console.log('stats');

    request(server + '_stats', function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(typeof body);
          var data = JSON.parse(body);
          console.log(JSON.stringify(data, null, 4));
      } else {
          console.log(error);
      }
    })

}
