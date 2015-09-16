/**
 * Created by charlie on 9/12/2015.
 */

var walk = require('walk'),
	fs = require('fs'),
	walker;

function walkDirs(dirToWalk, foldersToSkip, callback) {

	var fileInfo = [];
	var errors = [];

	var options = {
		followLinks: true,
		// These directories will be skipped
		filters: foldersToSkip
	};

	walker = walk.walk(dirToWalk, options);

	walker.on("file", function (root, fileStats, next) {
		fileInfo.push({ rootDir: root, stats: fileStats });
		next();
		/* fs.readFile(fileStats.name, function () { next(); }); */
	});

	walker.on("errors", function (root, nodeStatsArray, next) {
		console.log(root, nodeStatsArray);
		errors.push({rootDir: root, nodeStats: nodeStatsArray});
		next();
	});

	walker.on("end", function () {
		console.log("all done");
		callback(errors, fileInfo);
	});

}


exports.walkDirs = walkDirs;

