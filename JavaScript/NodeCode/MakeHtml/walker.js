/**
 * Created by charlie on 9/12/2015.
 */

var walk = require('walk');
var fs = require('fs');
var path = require('path');
var makePage = require('./make-page');
// var utils = require('./utils');

function walker() {

}

// walker.baseDir = '/home/charlie/Git';

walker.fileReport = [];

walker.options = {
	followLinks: false,
	// directories with these keys will be skipped
	filters: ["Temp", "_Temp"]
};

walker.walkDirs = function(directoryToWalk, extensionFilter, callback) {

	// var content = process.env.ELF_CONTENT;
	// console.log('walk called', walker.content);
	var walkInstance = walk.walk(directoryToWalk, walker.options);

	walkInstance.on("file", function (root, fileStats, next) {
		// console.log('file found', fileStats.name);
		var fileExtension = path.extname(fileStats.name);
		if(fileExtension === extensionFilter) {
			walker.fileReport.push({root: root, fileStats: fileStats});
		}
		next();
		/* fs.readFile(fileStats.name, function () { next(); }); */
	});

	walkInstance.on("errors", function (root, nodeStatsArray, next) {
		console.log(root, nodeStatsArray);
		next();
	});

	walkInstance.on("end", function () {
		console.log("all done");
		callback(walker.fileReport);
	});

};

// for more on mtime: https://nodejs.org/api/fs.html#fs_class_fs_stats
walker.buildFileReport = function(directoryToWalk, extensionFilter, callback) {
	walker.walkDirs(directoryToWalk, extensionFilter, function(fileReport) {
		var report = fileReport.map(function(file) {
			// console.log(file.root);
			return {"fileName": file.fileStats.name,
				"root": file.root,
				"fileSize": file.fileStats.size,
				"fileDate": file.fileStats.mtime
			};
		});
		callback(report);
	});
};

walker.getDirectories = function(report) {
	var accumulator = [];

	var directories = report.filter(function(item, i) {
		if (accumulator.indexOf(item.root) === -1) {
			accumulator.push(item.root);
			return true;
		}
	}).map(function(record) {
		// return { "root": record.root }
		return record.root;
	});
	return directories;
};

walker.makePage = function(directoryToWalk, directories, report) {
	console.log("Directories found:", JSON.stringify(directories, null, 4));

	directories.forEach(function(directory, index) {
		makePage(directory, index, report, directoryToWalk, directories);
	});

};

module.exports = walker;
