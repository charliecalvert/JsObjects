/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');

// Access Express and implement modular pattern
var QueryMongo = (function() {

    var url01 = 'mongodb://127.0.0.1:27017/test';
    var url02 = 'mongodb://192.168.2.20:27017/test';
    var url03 = 'mongodb://192.168.2.34:27017/test';
    var url04 = 'mongodb://192.168.56.101:27017/test';
    var url05 = 'mongodb://USERNAME:PASSWORD@ds0XXXXX.mongolab.com:XXXXX/elvenlab01';
    var collectionName = 'test_insert';

    function QueryMongo() {

    }

    QueryMongo.prototype.getData = function(result) {
        console.log('Called getData');

        // Open the test database that comes with MongoDb
        MongoClient.connect(url02, function(err, client) {
            if (err) {
                throw err;
            }
            console.log('In getData Callback');
            getCollection(client, result);
        });

    };

    var getCollection = function(client, response) {
        console.log('getCollection called');
        var database = client.db('test');
        var collection = database.collection(collectionName);

        // Count documents in the collection
        collection.count(function(err, count) {
            console.log(format("count = %s", count));
        });

        // Send the collection to the client.
        collection.find().toArray(function(err, theArray) {
            console.dir(theArray);
            client.close();
            response.send(theArray);
        });


    };

    return QueryMongo;

})();

// Express Code
app.get('/read', function(request, response) {
    console.log('read route called');
    var q = new QueryMongo();
    q.getData(response);
});

// Default.
app.get('/', function(request, result) {
    console.log('Default route called');
    var html = fs.readFileSync(__dirname + '/public/index.html');
    result.writeHeader(200, {
        "Content-Type": "text/html"
    });
    result.write(html);
    result.end();
});

// Give express access to the Public directory
app.use("/", express.static(__dirname + '/public'));

// Tell the webserver (and user) to listen on port 30025
app.listen(30025);
console.log('Listening on port 30025');
