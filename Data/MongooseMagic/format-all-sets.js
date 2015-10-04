var fs = require('fs');

function writeParsedData(parsedData) {
	fs.writeFile('./AllSetsParsed.json', parsedData, function(err) {
		if (err) throw err;
		console.log('File successfully saved.');
	});
}

fs.readFile('./AllSets.json', function(err, data) {
	data = JSON.parse(data);
	data = JSON.stringify(data, null, 4);
	writeParsedData(data);
});
