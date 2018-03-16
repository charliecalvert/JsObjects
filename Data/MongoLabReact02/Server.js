var http = require('http');
var url = require('url');
var port = process.env.PORT || 30025;
var fs = require('fs');
var path = require('path');

function getPath(request) {
	return url.parse(request.url).pathname;
}

// Thanks to Wallace: http://stackoverflow.com/a/1203361/253576
function getExtension(fileName) {
	var fileNameArray = fileName.split(".");
	if( fileNameArray.length === 1 || ( fileNameArray[0] === "" && fileNameArray.length === 2 ) ) {
		return "";
	}
	return fileNameArray.pop().toLowerCase();    
}

// Add endsWith method to String
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

var findFile = function(dir, fileName, done) {
	var results = [];
	var ext = path.extname(fileName);
	fs.readdir(dir, function(err, list) {

	if (err) return done(err);
	var pending = list.length;
	if (!pending) return done(null, results);
	list.forEach(function(file) {
		file = dir + '/' + file;
		fs.stat(file, function(err, stat) {
			if (stat && stat.isDirectory()) {
				findFile(file, fileName, function(err, res) {
				results = results.concat(res);
				if (!--pending) done(null, results);
			});
		} else {
			if (path.extname(file) === ext) {
				console.log(path.basename(file) + " -- " + fileName);
				if (file.endsWith(fileName)) {
					file = file.replace(/\\/g, '\/');
					results.push(file);
				}
			}
			if (!--pending) done(null, results);
		}
	  });
	});
  });
};

function loadContent(request, response) {
	var path = getPath(request);
	console.log("Request for " + path + " received.");
	if (getExtension(path) === 'css') {
		findFile(__dirname, path.replace('\/', ''), function(err, results) {
			console.log("New Path: " + results[0]);
			var css = fs.readFileSync(results[0]);
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(css);
			response.end();
		});
	} else if (getExtension(path) === 'html') {
		var html = fs.readFileSync(__dirname + path);
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	} else if (getExtension(path) === 'js') {
		findFile(__dirname, path.replace('\/', ''), function(err, results) {
			var javaScript = fs.readFileSync(results[0]);
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(javaScript);
		response.end();
		});
	} else if (getExtension(path) === 'png' || getExtension(path) === 'gif' || getExtension(path) === 'jpg' ) {
		findFile(__dirname, path.replace('\/', ''), function(err, results) {
			fs.readFile(results[0], "binary", function(err, file) {
				console.log("PNG detected");
				if(err) {
					console.log("Error reading binary file");
					response.writeHeader(500, {"Content-Type": "text/plain"});
					response.write(err + "\n");
					response.end();
				}
				else{
					console.log("PNG loaded");
					response.writeHeader(200, {"Content-Type": "image/png"});
					response.write(file, "binary");
					response.end();
				}
			});
		});
	} else {
	    var html = fs.readFileSync(__dirname + '/index.html');
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	}
}

http.createServer(loadContent).listen(port);
console.log("Server has started:" + port);