/*jshint browser: true, devel: true */

// Handle user input with minimist
var minimist = require('minimist');
var walkDirs = require("./WalkDirs").walkDirs;
var s3Code = require("./S3Code");

/*
 * You will need to edit the following. Before filling
 * it out, see the README file for this project.
 */
var options = {
		//pathToConfig: '/home/charlie/config.json',
		pathToConfig: 'c:\\src\\config\\config.json',
		reallyWrite: true, 
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "C:/Temp/CloudNotes",
		s3RootFolder: "FilesFour",
		createFolderToWalkOnS3: true,
		createIndex: true,
		filesToIgnore: ['Thumbs.db', '.gitignore', 'MyFile.html']
};	

function explain() {
	console.log("========================================");
	console.log("This program takes one of two parameters");
	console.log("--------------");
	console.log("-l listBuckets");
	console.log("-u upload");
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
		s3Code.loadConfig(options.pathToConfig);
		s3Code.listBuckets();
	} else if (option.u) {
		walkDirs(options);
	} else {	
		explain();
	}
} else {
	explain();
}


