var commonmark = require('commonmark');
var fs = require('fs');

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

function write(content) {
	fs.writeFile('test.html', content, 'utf8', function(err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});
}

fs.readFile('test.md', 'utf8', function(err, content) {
	console.log(content);
	var parsed = reader.parse(content); 
	var result = writer.render(parsed); 
	write(result);
});
