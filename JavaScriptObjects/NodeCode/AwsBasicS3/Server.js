// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html
// http://aws.amazon.com/pricing/s3/

/*jshint browser: true, devel: true */

var AWS = require('aws-sdk');
var config = AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();
var fs = require('fs');
var walk = require('walk');

var bucketName = 's3bucket03.elvenware.com';


function listBuckets(s3) {
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

function writeFile(localFileName, nameOnS3, binary) {
	// Read in the file, convert it to base64, store to S3
	fs.readFile(localFileName, function(err, data) {
		if (err) {
			throw err;
		}

		if (binary) {
			console.log("Making binary");
			data = new Buffer(data, 'binary').toString('base64');
		}

		s3.client.putObject({
			ACL: 'public-read',
			Bucket : bucketName,
			Key : nameOnS3,
			Body : data,
			ContentType: 'text/html'
		}, function(resp) {
			console.log('Successfully uploaded package.');
		});
	});
}

function walkDirs() {
	var options = {
		followLinks : false,
	};

	var walker = walk.walk("G:/Web/Elvenware/charlie/books/CloudNotes", options);


	walker.on("names", function(root, nodeNamesArray) {
		nodeNamesArray.sort(function(a, b) {
			if (a > b)
				return 1;
			if (a < b)
				return -1;
			return 0;
		});
	});

	walker.on("directories", function(root, dirStatsArray, next) {
		// dirStatsArray is an array of `stat` objects with the additional attributes
		// * type
		// * error
		// * name
		if (typeof dirStatusArray != 'undefined') 
			console.log("Directories: " + dirStatsArray.type);
		next();
	});

	walker.on("file", function(root, fileStats, next) {
		var fileName = root + "/" + fileStats.name;
		var pieces = root.split('/');
		var s3Dir = pieces[pieces.length - 1];
		s3Name = s3Dir + '/' + fileStats.name;
	 	writeFile(fileName, s3Name, false);
		next();
	});

	walker.on("errors", function(root, nodeStatsArray, next) {
		console.log(root);
		next();
	});

	walker.on("end", function() {
		console.log("all done");
	});

}

walkDirs();
writeFile('CloudNotes.html', 'CloudNotes.html', false);
//listBuckets(s3);
