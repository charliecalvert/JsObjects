/*jshint browser: true, devel: true */

// Handle user input with minimist
var minimist = require('minimist');
var walkDirs = require("./Source/WalkDirs").walkDirs;
var s3Code = require("./Source/S3Code");
var fs = require("fs");

/*
 * You will need to edit OptionsServer.json. It has this format

var options = {
		pathToConfig: '/home/charlie/config.json',		
		reallyWrite: true, 
		bucketName: 'bucket01.elvenware.com',
		folderToWalk: "Files",
		s3RootFolder: "FilesTwo",
		createFolderToWalkOnS3: true,
		createIndex: true,
		filesToIgnore: ['Thumbs.db', '.gitignore', 'MyFile.html']
};
 
 * Before filling it out, see the README file for this project. 
 */	

function explain() { 'use strict';
	console.log("========================================");
	console.log("This is command line version of AwsBasicS3.");
	console.log("Run node app.js to start the easier to use web app.");
	console.log("It takes one of two parameters");
	console.log("It is configured by OptionsServer.json");
	console.log("Examine that file and the readme.");
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
		s3Code.listBuckets(null, false);
	} else if (option.u) {
		var options = fs.readFileSync("OptionsServer.json", 'utf8');
		options = JSON.parse(options);
		walkDirs(options);
	} else {	
		explain();
	}
} else {
	explain();
}


