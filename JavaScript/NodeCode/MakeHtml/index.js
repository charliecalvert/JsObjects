/**
 * Created by charlie on 1/1/16.
 */

var walker = require('elven-site-tools').walker;
var fs = require('fs');
var config = require('./elven-config');

function walk(directoryToWalk, destinationDir) {

    fs.access(directoryToWalk, fs.F_OK | fs.R_OK, function(err) {
        if (err) {
            console.log('Could not find', directoryToWalk);
            response.sendStatus(401);
        } else {
            console.log('start', directoryToWalk);
            walker.buildFileReport(directoryToWalk, '.md', function(report) {
                console.log('build');
                var directories = walker.getDirectories(report);
                try {
                    walker.makePage(directoryToWalk, destinationDir, directories, report, function (masterListOfNames, htmlFilesWritten) {
                        var report = {
                            result: 'success',
                            destinationDir: destinationDir,
                            directories: directories,
                            masterListOfNames: masterListOfNames,
                            htmlFilesWritten: htmlFilesWritten
                        };
                        console.log(report);
                    });
                } catch(e) {
                    console.log("The error:", e);
                }
            });
        }
    });
}

function run(configSummary) {
    //var directoryToWalk = process.env.HOME + '/Documents/AllTest';
    var directoryToWalk = configSummary.baseDir + configSummary.siteDirs[0];
    var destinationDir = configSummary.destinationDirs[0];
    walk(directoryToWalk, destinationDir);
}

function runConfig() {
    config.load(function() {
        var baseDir = config.get('base-dir');
        var siteDirs = config.get('site-dirs');
        var destinationDirs = config.get('destination-dirs');
        var configSummary = {"baseDir": baseDir, 'siteDirs': siteDirs, "destinationDirs": destinationDirs};
        console.log("ConfigSummary:", configSummary);
        run(configSummary);
    });
}


runConfig();