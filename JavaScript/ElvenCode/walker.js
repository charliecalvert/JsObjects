/**
 * Created by charlie on 9/12/2015.
 */

var walk = require('walk');
var fs = require('fs');
var path = require('path');
var elfUtils = require('./elf-utils');
var elfLog = require('./elf-log.js');

var Walker = (function() {

function Walker() {
    'use strict';
    elfLog.setLevel(elfLog.logLevelSilent);
}

Walker.prototype.directoryToWalk = '';

Walker.prototype.options = {
    followLinks: false,
    // directories with these keys will be skipped
    filters: []
};

function testExtension(extensionFilter, fileExtension) {
    'use strict';
    if (typeof extensionFilter === 'string') {
        return extensionFilter === fileExtension;
    } else if (elfUtils.arrayContains(extensionFilter, fileExtension)) {
        return true;
    } else {
        return false;
    }
}

Walker.prototype.walkDirs = function(directoryToWalk, extensionFilter, callback) {
    'use strict';

    var walkerFileReport = [];

    this.directoryToWalk = directoryToWalk;

    var walkInstance = walk.walk(directoryToWalk, this.options);

    walkInstance.on('file', function(root, fileStats, next) {

        // console.log('file found', root + path.sep + fileStats.name);
        var fileExtension = path.extname(fileStats.name);

        if (testExtension(extensionFilter, fileExtension)) {
            walkerFileReport.push({
                root: root,
                fileStats: fileStats
            });
        }
        next();
        /* fs.readFile(fileStats.name, function () { next(); }); */
    });

    walkInstance.on('errors', function(root, nodeStatsArray, next) {
        elfLog.log("Error iterating directories");
        elfLog.log(elfLog.logLevelDetails, root, nodeStatsArray);
        next();
    });

    walkInstance.on('end', function() {
        elfLog.log(elfLog.logLevelDetails, 'all done walking directories');
        callback(walkerFileReport);
    });

};

Walker.prototype.writeFile = function(fileName, report, response) {
    'use strict';
    fs.writeFile(fileName, JSON.stringify(report, null, 4), function(err) {
        if (err) {
            throw (err);
        } else {
            console.log('wrote file');
            response.send({
                result: 'success'
            });
        }
    });
};

// for more on mtime: https://nodejs.org/api/fs.html#fs_class_fs_stats
Walker.prototype.getBasics = function(fileReport) {
    'use strict';
    return fileReport.map(function(file) {
        return {
            'fileName': file.fileStats.name,
            'root': elfUtils.ensureEndsWithPathSep(file.root),
            'fileSize': file.fileStats.size,
            'fileDate': file.fileStats.mtime
        };
    });
};

Walker.prototype.getDirectories = function(report) {
    'use strict';
    var accumulator = [];

    var directories = report.filter(function(item, i) {
        if (accumulator.indexOf(item.root) === -1) {
            accumulator.push(item.root);
            return true;
        }
    }).map(function(record) {
        // return { 'root': record.root }
        return elfUtils.ensureEndsWithPathSep(record.root);
    });
    return directories;
};

Walker.prototype.getFileNames = function(report) {
    'use strict';
    return report.map(function(item) {
        return item.fileStats.name;
    });
};

Walker.prototype.getFullFileNames = function(report) {
    'use strict';
    return report.map(function(item) {
        return path.normalize(elfUtils.ensureEndsWithPathSep(item.root) + item.fileStats.name);
    });
};

	return Walker;
})();

module.exports = new Walker();
