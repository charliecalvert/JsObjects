/**
 * @author Charlie Calvert
 */

var fs = require('fs');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function isWantedFile(file, filePatterns) {
	for (var i = 0; i < filePatterns.length; i++) {
		if (endsWith(file, filePatterns[i])) {
			return true;
		}
	}
	return false;
}

function isWantedDirectory(file, foldersToSkip) {
	for (var i = 0; i < foldersToSkip.length; i++) {
		if (file.indexOf(foldersToSkip[i]) !== -1) {
			return false;
		}
	}
	return true;
}

var walk = function(dir, filePatterns, foldersToSkip, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {      	
        if (stat && stat.isDirectory() && isWantedDirectory(file, foldersToSkip)) {
          walk(file, filePatterns, foldersToSkip, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (isWantedFile(file, filePatterns)) {
          	results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

exports.walk = walk;