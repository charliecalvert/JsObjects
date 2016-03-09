/**
 * Created by charlie on 1/1/16.
 */

var walker = require('elven-site-tools').walker;
var fs = require('fs');
var config = require('./elven-config');

function walk(directoryToWalk, destinationDir, bootswatch) {

    fs.access(directoryToWalk, fs.F_OK | fs.R_OK, function(err) {
        if (err) {
            console.log('Could not find', directoryToWalk);
        } else {
            console.log('start', directoryToWalk);
            console.log('bootswatch', bootswatch);
            walker.buildFileReport(directoryToWalk, '.md', function(report) {
                console.log('build');
                var directories = walker.getDirectories(report);
                var settings = {
                    report: report,
                    directoryToWalk: directoryToWalk,
                    destinationDir: destinationDir,
                    directories: directories,
                    highlight: true,
                    testRun: false,
                    bootswatch: bootswatch
                };

                try {
                    walker.makePage(settings, function (masterListOfNames, htmlFilesWritten) {
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
    walk(directoryToWalk, destinationDir, configSummary.bootswatch);
}

function runConfig() {
    config.load(function() {
        var baseDir = config.get('base-dir');
        var bootswatch = config.get('bootswatch');
        var siteDirs = config.get('site-dirs');
        var destinationDirs = config.get('destination-dirs');
        var configSummary = {
            "baseDir": baseDir, 
            'bootswatch': bootswatch, 
            'siteDirs': siteDirs, 
            "destinationDirs": destinationDirs
        };
        console.log("ConfigSummary:", configSummary);
        run(configSummary);
    });
}


runConfig();
