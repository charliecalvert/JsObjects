/*jshint browser: true, devel: true */

var minimist = require('minimist');
var walkDirs = require("./WalkDirs").walkDirs;
var s3Code = require("./S3Code");

var options = {
		pathToConfig: '/home/charlie/config.json',
		reallyWrite: true, 
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "/home/charlie/Files",
		s3RootFolder: "FilesTwo",
		createFolderToWalkOnS3: true,
		createIndex: true
};	

/*  
 * Handle the User Input
 * Using the library called minimist
 */

function explain() {
	console.log("========================================");
	console.log("This program takes one of two parameters");
	console.log("--------------");
	console.log("-l listBuckets");
	console.log("-u upload")
	console.log("--------------");
	console.log("Examples: ");
	console.log("Run listBuckets: ");
	console.log("  node Server.js -l");
	console.log("Run walkDirs to upload your files: ");
	console.log("  node Server.js -u");
	console.log("========================================");
}

if (process.argv.length >= 3) {
	var option = minimist(process.argv.slice(2));	
	if (option.l) {
		s3Code.loadConfig('/home/charlie/config.json');
		s3Code.listBuckets();
	} else if (option.u) {
		walkDirs(options);
	} else {	
		explain();
	}
} else {
	explain();
}


