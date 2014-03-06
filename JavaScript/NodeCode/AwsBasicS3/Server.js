/*jshint browser: true, devel: true */

var minimist = require('minimist');
var walkDirs = require("./WalkDirs").walkDirs;
var listBuckets = require("./S3Code").listBuckets;

function walk() {
	
	var options = {
		reallyWrite: true, 
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "Files",
		s3RootFolder: "Files",
		createFolderToWalkOnS3: true,
		createIndex: true
	};	
	
	walkDirs(options);
	
	// writeFile('CloudNotes.html', indexNameOnS3, false);
}

/*  
 * Handle the User Input
 * Using the library called minimist
 */

function explain() {
	console.log("-l listBuckets");
	console.log("-w walkDirs")
}

if (process.argv.length >= 3) {
	var option = minimist(process.argv.slice(2));	
	if (option.l) {
		listBuckets();
	} else if (option.w) {
		walk();
	} else {	
		explain;
	}
} else {
	explain();
}


