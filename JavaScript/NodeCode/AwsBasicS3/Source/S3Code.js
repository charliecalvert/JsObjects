/**
 * @author Charlie Calvert
 */

var AWS = require('aws-sdk');
var s3 = null;
var fs = require("fs");
var configLoaded = false;

function loadConfig(pathToConfig) {'use strict';
	configLoaded = true;
	var config = AWS.config.loadFromPath(pathToConfig);
	s3 = new AWS.S3();
}

function configMessage() {'use strict';
	console.log("------------------------------");
	console.log("You must call loadConfig first");
	console.log("------------------------------");
}

function listBuckets(response, useResponse) {'use strict';
	console.log("calling listBuckets");
	if (!configLoaded) {
		configMessage();
	} else {
		s3.client.listBuckets(function(err, data) {
			if (err) {
				console.log(err);
			} else {
				var bucketData = [];
				for (var index in data.Buckets) {
					var bucket = data.Buckets[index];
					var bucketDetails = "Bucket: " + bucket.Name + ' : ' + bucket.CreationDate;
					if (!useResponse) {
						console.log(bucketDetails);
					} else {
						bucketData.push(bucketDetails);
					}
				}
				if (useResponse) {
					response.send(bucketData);
				}
			}
		});
	}
}

function writeFile(localFileName, bucketName, nameOnS3, binary) {'use strict';
	// Read in the file, convert it to base64, store to S3

	if (!configLoaded) {
		configMessage();
		return;
	}

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
				ACL : 'public-read',
				Bucket : bucketName,
				Key : nameOnS3,
				Body : data,
				ContentType : contentType
			}, function(resp) {
				console.log('Successfully uploaded package: ' + nameOnS3 + ' Content Type: ' + contentType);
			});
		}
	});
}

exports.loadConfig = loadConfig;
exports.writeFile = writeFile;
exports.listBuckets = listBuckets;
