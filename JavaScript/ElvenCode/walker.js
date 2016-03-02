/**
 * Created by charlie on 9/12/2015.
 */

var walk = require('walk');
var fs = require('fs');
var path = require('path');
var elfUtils = require('./elf-utils');

function utils() {}

function walker() {

}

walker.fileReport = [];

walker.directoryToWalk;

walker.options = {
    followLinks: false,
    // directories with these keys will be skipped
    filters: []
};

walker.walkDirs = function(directoryToWalk, extensionFilter, callback) {
    'use strict';
    walker.directoryToWalk = directoryToWalk;

    var walkInstance = walk.walk(directoryToWalk, walker.options);

    walkInstance.on('file', function(root, fileStats, next) {

        // console.log('file found', root + path.sep + fileStats.name);
        var fileExtension = path.extname(fileStats.name);
        if (fileExtension === extensionFilter) {
            walker.fileReport.push({
                root: root,
                fileStats: fileStats
            });
        }
        next();
        /* fs.readFile(fileStats.name, function () { next(); }); */
    });

    walkInstance.on('errors', function(root, nodeStatsArray, next) {
        console.log('Houston, we have an error');
        // console.log(root, nodeStatsArray);
        next();
    });

    walkInstance.on('end', function() {
        // console.log('all done');
        callback(walker.fileReport);
    });

};

walker.writeFile = function(fileName, report, response) {
    'use strict';
    fs.writeFile(fileName, JSON.stringify(report, null, 4), function(err) {
        if (err) {
            response.send({
                result: 'failure'
            });
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
walker.getBasics = function(fileReport) {
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

walker.getDirectories = function(report) {
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

walker.getFileNames = function(report) {
    'use strict';
    return report.map(function(item) {
        return item.fileStats.name;
    });
};

walker.getFullFileNames = function(report) {
    'use strict';
    return report.map(function(item) {
        return path.normalize(elfUtils.ensureEndsWithPathSep(item.root) + item.fileStats.name);
    });
};

module.exports = walker;
