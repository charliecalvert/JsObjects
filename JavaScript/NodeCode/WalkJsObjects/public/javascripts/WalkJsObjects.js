/**
 * @author Charlie Calvert
 */

var fs = require('fs');

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}


var walk = function(dir, extensionToFind, folderToSkip, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {      	
        if (stat && stat.isDirectory() && file.indexOf(folderToSkip) === -1) {
          walk(file, extensionToFind, folderToSkip, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (endsWith(file, extensionToFind)) {
          	results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

exports.walk = walk;