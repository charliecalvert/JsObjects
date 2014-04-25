var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require("path");

var SimpleDir = (function() {
    'use strict';

    function SimpleDir() {}

    var makeDir = function(folder) {
        mkdirp(folder);
    };

    // Test if a directory exists, if it does not exist create it
    SimpleDir.prototype.ensureDir = function(folder) {
        fs.exists(folder, existsFunc);
    };

    // Synchronous version of directory exists
    SimpleDir.prototype.ensureDirSync = function(folder) {
        currentFolder = folder;
        if (fs.existsSync(folder)) {
            return fs.statSync(folder);
        } else {
            makeDir(folder);
            return 'successfully created directory';
        }
    };

    // Remove directories recursively
    // Credit to tkihira: https://gist.github.com/tkihira/2367067
    SimpleDir.prototype.rmdirSync = function(dir) {
        var list = fs.readdirSync(dir);
        for (var i = 0; i < list.length; i++) {
            var filename = path.join(dir, list[i]);
            var stat = fs.statSync(filename);

            if (filename == "." || filename == "..") {
                // pass these files
            } else if (stat.isDirectory()) {
                // rmdir recursively
                this.rmdirSync(filename);
            } else {
                // rm filename
                fs.unlinkSync(filename);
            }
        }
        fs.rmdirSync(dir);
    };

    return SimpleDir;
})();

exports.dirs = new SimpleDir();
