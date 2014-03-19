Mongo Multi-Collection
===========

The example shows how to maintain a list of multiple collections from
a single database. It contains:

- Node
- Express
- MongoDb

Please make sure you are using the correct URL from the top of
the MongoTalk.json file. You may also need to configure where
you place that file, which can be done by looking at LoadConfig.js :

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';

You might have to modify one of those URLs. They are used in this line
from the QueryMongo.js method called **getDatabase**:

	MongoClient.connect(url, function(err, database) { 

If you are unsure of which URL to use, pick the first one, that goes to
local host.

This program shows how to:

- How to read an entire collection and display it in an HTML file
- How to send a file called **index.html** from **Server.js**.
- Note that index.html relies on **index.js**.

In **index.js** you can find this code, which runs on the client
side, and shows how to display an array of JSON data which was 
sent by the server:

	var read = function(event) {
       $.getJSON('/read', { collectionName : event.data.collectionName }, 
           function(data) {
              console.log(data);
              for (var i = 0; i < data.length; i++) {
                 $("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
              }
           }
       );
    };