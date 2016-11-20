/**
 * Created by charlie on 1/1/16.
 */

var walker = require('elven-site-tools').walker;
var fs = require('fs');
var config = require('./elven-config');

function walk(directoryToWalk, destinationDir, mostRecentDate, bootswatch) {

    fs.access(directoryToWalk, fs.F_OK | fs.R_OK, function(err) {
        if (err) {
            console.log('Could not find', directoryToWalk);
        } else {
            console.log('start', directoryToWalk);
            console.log('bootswatch', bootswatch);
            walker.buildFileReport(directoryToWalk, '.md', mostRecentDate, function(report) {
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
    walk(directoryToWalk, destinationDir, configSummary.mostRecentDate, configSummary.bootswatch);
}

function runConfig() {
    config.useLocalConfig = true;
    var user = 'calvert';
    config.load(function() {
        var baseDir = config.get(user, 'base-dir');
        var mostRecentDate = config.get(user, 'most-recent-date');
        if (!mostRecentDate) {
            throw "most-recent-date not found in ElvenConfig.json";
        }
        var bootswatch = config.get(user, 'bootswatch');
        var siteDirs = config.get(user, 'site-dirs');
        var destinationDirs = config.get(user, 'destination-dirs');
        var configSummary = {
            "baseDir": baseDir, 
            'bootswatch': bootswatch, 
            'siteDirs': siteDirs, 
            "destinationDirs": destinationDirs,
            'mostRecentDate': mostRecentDate
        };
        console.log("ConfigSummary:", configSummary);
        run(configSummary);
    });
}


runConfig();
