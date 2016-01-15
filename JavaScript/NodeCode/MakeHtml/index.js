/**
 * Created by charlie on 1/1/16.
 */

var walker = require('./walker');

function walk() {
    var directoryToWalk = process.env.HOME + '/Documents/AllTest';
    walker.buildFileReport(directoryToWalk, '.md', function(report) {
        var directories = walker.getDirectories(report);
        walker.makePage(directoryToWalk, directories, report, null);
    });
}

walk();
