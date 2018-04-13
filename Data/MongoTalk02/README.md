MongoTalk02
===========

This applications contains:

- Node
- Express
- MongoDb

It assumes that you have MongoDB installed and some records in a the **test_insert** collection in a database called **test**.

Please make sure you are using the correct URL from the top of
the **server.js** file:

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';

You might have to modify one of those URLs. They are used in this line from the Server.js method called **getData**:

	MongoClient.connect(url01, function(err, database) {

If you are unsure of which URL to use, pick the first one, that goes to local host.

The MongoTalk example shows how to insert data, this one shows:

- How to read an entire collection and display it in an HTML file
- How to send a file called **index.html** from **Server.js**.
- Note that index.html relies on **index.js**.

## Client

In **index.js** you can find this code, which runs on the client
side, and shows how to display an array of JSON data which was
sent by the server:

```javascript
function appendToList(text) {
	var ul = document.getElementById("mongoData");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}

function showData() {
	fetch('/read')
		.then(function(response){ return response.json() })
		.then(function(json) {
			for (var i = 0; i < json.length; i++) {
				appendToList(JSON.stringify(json[i]));				
			}
		})
}
```

This replaces this code that uses **jQuery**:

```javascript
$.getJSON('/read', function(data) {
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
	}
});
```
