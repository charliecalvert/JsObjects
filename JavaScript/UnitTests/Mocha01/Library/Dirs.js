var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require("path");

var Dirs = (function() {
    'use strict';

    var currentFolder = null;

    function Dirs() {}

    // A Callback for fs.Stat
    var dirStatusFunc = function(error, statData) {
        if (error) {
            console.log(error);
            throw error;
        }
        console.log(statData);
    };

    // Create a directory, supports recursion
    var makeDir = function(dir) {
        mkdirp(dir);
    };

    // Get the status of a directory
    var directoryStats = function(dir) {
        return fs.stat(dir, dirStatusFunc);
    };

    // A callback for fs.exists
    var existsFunc = function(exists) {
        if (exists) {
            directoryStats(currentFolder);
        } else {
            makeDir(currentFolder);
            console.log('Created directory: ' + currentFolder);
        }
    };

    // Test if a directory exists, if it does not exist create it
    Dirs.prototype.ensureDir = function(folder) {
        currentFolder = folder;
        fs.exists(folder, existsFunc);
    };

    // Synchronous version of directory exists
    Dirs.prototype.ensureDirSync = function(folder) {
        currentFolder = folder;
        if (fs.existsSync(folder)) {
            return fs.statSync(folder);
        } else {
            makeDir(folder);
            return 'successfully created directory';
        }
    };

    // Remove directories recursively
    Dirs.prototype.rmdirSync = function(dir) {
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
                // rm fiilename
                fs.unlinkSync(filename);
            }
        }
        fs.rmdirSync(dir);
    };

    return Dirs;
})();

exports.dirs = new Dirs();
