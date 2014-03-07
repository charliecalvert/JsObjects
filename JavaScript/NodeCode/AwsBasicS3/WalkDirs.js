/**
 * @author Charlie Calvert
 */

var fs = require("fs");
var walk = require('walk');
var s3Code = require("./S3Code");

var winston = require('winston');
// var winston = console;

// winston.add(winston.transports.File, { filename: './somefile.log' });
// winston.remove(winston.transports.Console);

function walkDirs(serverOptions) {
	
	winston.log("info", JSON.stringify(serverOptions, null, 4));
	
	if (serverOptions.reallyWrite) {
		winston.log("info", "Loading config");		
		s3Code.loadConfig(serverOptions.pathToConfig);
	}
		
	var options = {
		followLinks : false,
	};
	var myIndexFile = "<body>\n<html><ul>\n";
	
	// We care about S3 slashes, not ours
	var ensureFinalSlash = function(fileName) {
		var pathSep = '/';
		if (fileName.substring(fileName.length, 1) !== pathSep) {
			fileName = fileName + pathSep;
		}
		return fileName;
	};
	
	function createIndexFile(dir, fileName) {
		winston.log("info", "createIndexFile called");
		try {
			var file = "";
			if (dir.length > 0) {
				file = ensureFinalSlash(dir) + fileName;
			} else
				file = fileName;
			myIndexFile += '<li><a href=' + file + '>' + file + '</a>\n</li>';
		}
		catch(err) {
			winston.log(err);
		}
	}

	function writeToDisk(fileName, content, nameOnS3) {
		fs.writeFile(fileName, content, function(err) {
			if(err) {
			  console.log(err);
			} else {
			  console.log("IndexFile saved to " + fileName);
			  s3Code.writeFile(fileName, serverOptions.bucketName, nameOnS3, false);
			}
		});	
	}
	
	winston.log("info", "walking: " + serverOptions.folderToWalk);
	
	var walker = walk.walk(serverOptions.folderToWalk, options);


	walker.on("names", function(root, nodeNamesArray) {
		winston.log("names called: " + root);
		nodeNamesArray.sort(function(a, b) {
			if (a > b)
				return 1;
			if (a < b)
				return -1;
			return 0;
		});
	});

	walker.on("directories", function(root, dirStatsArray, next) {
		winston.log("Directory Found: " + root);
		// dirStatsArray is an array of `stat` objects with the additional attributes
		// * type
		// * error
		// * name
		if (typeof dirStatsArray != 'undefined') 
			winston.log("Directories: " + dirStatsArray.type);
		next();
	});

	
	walker.on("file", function(root, fileStats, next) {
		winston.log("info", 'In File, the Root: ' + root);
		// winston.log("fileStats.name: " + fileStats.name);
		if (fileStats.name === 'upLoadMe.html') {
			console.log(fileStats);
			console.log(root);
		}
		if (fileStats.name.indexOf('Thumbs.db') === -1) {
			var localFileName = root + "/" + fileStats.name;
			var pieces = root.split('/');
			winston.log("info", "Pieces of root: " + pieces);
			var s3Dir = "";
			// not in root of upload dir			
			if (pieces.length >= 2) { 
				s3Dir = pieces[pieces.length - 1];
			}
			
			// Build the index file
			if (serverOptions.createIndex) {
				try {
					createIndexFile(s3Dir, fileStats.name);
				} catch(err) {
					winston.log(err);
				}
			}
			
			// If we are going to put it in a folder on S3
			if (serverOptions.createFolderToWalkOnS3) {
				if (s3Dir.length > 0) {
					s3Dir = ensureFinalSlash(serverOptions.s3RootFolder) + s3Dir;
				} else {
					s3Dir = serverOptions.s3RootFolder;
				}
			}
			
			// Don't put a slash in front of files in root
			if (s3Dir.length > 0) {
				var s3Name = ensureFinalSlash(s3Dir) + fileStats.name;
			} else {
				s3Name = fileStats.name;
			}
			winston.log("info", "s3Name: " + s3Name);
			if (serverOptions.reallyWrite) {
		 		s3Code.writeFile(localFileName, serverOptions.bucketName, s3Name, false);
		 	}
			
			winston.log("leaving file");			
		} else {
			winston.log("info", "Found Thumb");
		}
		next();
	});

	walker.on("errors", function(root, nodeStatsArray, next) {
		winston.log("Error: " + root);
		next();
	});

	walker.on("end", function() {
		winston.log("info", "all done");
		var indexName = "index.html";
		
		if (serverOptions.createIndex && serverOptions.reallyWrite) {
			myIndexFile += '\n</ul>\n</body>\n</html>'			
			writeToDisk(indexName, myIndexFile, ensureFinalSlash(serverOptions.s3RootFolder) + indexName);
		}
		
		/* if (serverOptions.createFolderToWalkOnS3) {
			var indexNameOnS3 = 'CloudNotes.html';
			indexNameOnS3 = ensureFinalSlash(serverOptions.folderToWalk) + indexNameOnS3;
		}*/
	});

}

exports.walkDirs = walkDirs;
