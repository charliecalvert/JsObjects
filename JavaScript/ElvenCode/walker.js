/**
 * Created by charlie on 9/12/2015.
 */

var walk = require('walk');
var fs = require('fs');
var path = require('path')


function utils() {}

utils.makeMarkdownLink = function(fileName) {
	return '* [' + fileName + '](' + fileName + ')'
};

utils.swapExtension = function(fileName, ext) {
	'use strict';
	return fileName.substr(0, fileName.lastIndexOf('.')) + ext;
};

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

walker.writeFile = function(fileName, report, response) {
	fs.writeFile(fileName, JSON.stringify(report, null, 4), function(err) {
		if (err) {
			throw(err);
			response.send({result:'failure'});
		} else {
			console.log('wrote file');
			response.send({result:'success'});
		}
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

walker.getFileNames = function(element, report) {
	return report.filter(function(item, i) {
		return item.root === element;
	}).map(function(item) {
		var fileName = utils.swapExtension(item.fileName, '.html');
		return utils.makeMarkdownLink(fileName);
	}).join('\n');
};

walker.makePage = function(directoryToWalk, directories, report, response) {
	console.log("directories in makepage:", directories);

	var allFileNames = [];
	directories.forEach(function(element, index, ar) {
		var fileNames = walker.getFileNames(element, report);
		var fileName = element + '/AllFiles.md';
		var relativeName = fileName.substr(directoryToWalk.length + 1, fileName.length);
		allFileNames.push(utils.makeMarkdownLink(utils.swapExtension(relativeName, '.html')));
		fs.writeFile(fileName, fileNames + '\n', function(err) {
			if (err) {
				throw(err);
				response.send({result:'failure'});
				return;
			} else {
				if (index === ar.length - 1) {
					response.send({result: 'success'});
				}
			}
		});
	});
	fs.writeFile(directoryToWalk + '/master-list.md', allFileNames.join('\n'), function(err) {
		if (err) {
			throw(err);
		} else {
			console.log('wrote master file');
		}
	})
};

module.exports = walker;
