var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

app.get('/', function(req, res) {
	var html = fs.readFileSync('public/index.html');
	res.writeHeader(200, {"Content-Type": "text/html"});
	res.end(html);
});

app.get('/dirName', function(request, response) {
	response.send(__dirname);
});

app.use("/", express.static(__dirname + '/Public'));
app.use("/FakeRoute", express.static(__dirname + '/Folder02'));

app.listen(port);
console.log('Listening on port :' + port);