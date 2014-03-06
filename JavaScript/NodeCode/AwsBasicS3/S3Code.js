/**
 * @author Charlie Calvert
 */


var AWS = require('aws-sdk');
var config = AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();

var fs = require("fs");

function listBuckets() {
	console.log("calling listBuckets");
	s3.client.listBuckets(function(err, data) {
		if (err) {
			console.log(err);
		} else {
			for (var index in data.Buckets) {
				var bucket = data.Buckets[index];
				console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
			} 
		}
	});
}

function writeFile(localFileName, bucketName, nameOnS3, binary) {
	// Read in the file, convert it to base64, store to S3
	
		
	fs.readFile(localFileName, function(err, data) {
		if (err) {
			throw err;
		}

		if (binary) {
			console.log("Making binary");
			data = new Buffer(data, 'binary').toString('base64');
		}
		
		var ext = localFileName.split('.').pop();
		
		var contentType = 'text/html';
		switch(ext) {
			case 'db':
				return;
				
			case 'htm':
			case 'html': 
				break;
			case 'js':
				contentType = 'application/x-javascript';
				break;
			case 'css':
				contentType = 'text/css';
				break;
			case 'png':
				contentType = 'image/png';
				break;
			case 'jpg':
				contentType = 'image/jpg';
				break;
			case 'bmp':
				contentType = 'image/bmp';
				break;
			case 'gif':
				contentType = 'image/gif';
				break;
		}

		if (false) {
			console.log("Writing: " + bucketName + "/" + nameOnS3);
		} else {
			s3.client.putObject({
				ACL: 'public-read',
				Bucket : bucketName,
				Key : nameOnS3,
				Body : data,
				ContentType: contentType
			}, function(resp) {
				console.log('Successfully uploaded package: ' + nameOnS3 + ' Content Type: ' + contentType);
			});
		}
	});
}

exports.writeFile = writeFile;
exports.listBuckets = listBuckets; 
