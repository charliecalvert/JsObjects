/**
 * Created by charlie on 1/17/16.
 */

var setupMarked = require('./setup-marked');
var fs = require('fs');
var utils = require('./utils');
var mkdirp = require('mkdirp');

var masterListOfNames = [];

var getFileNamesAsMarkdownList = function(curDir, report) {
    return report.filter(function(item, i) {
        return item.root === curDir && item.fileName.indexOf('Summary') === -1;
    }).map(function(item) {
        var fileName = utils.swapExtension(item.fileName, '.html');
        return utils.makeMarkdownLink(fileName);
    }).join('\n');
};

function writeMasterFile(masterFileName, masterListOfNames) {
    fs.writeFile(masterFileName, masterListOfNames.join('\n'), function (err) {
        if (err) {
            throw(err);
        } else {
            console.log('wrote master file in: ', masterFileName);
        }
    })
}

function getApacheDirName(htmlName, directoryToWalk) {
    return '/var/www/html/' + htmlName.slice(directoryToWalk.length + 1, htmlName.length);
}

function writeHtmlFiles(report, directoryToWalk) {
    report.forEach(function(item) {
        var markdownName = item.root + '/' + item.fileName;
        var html = setupMarked.getSingleFile(item.fileName, markdownName);
        var htmlName = utils.swapExtension(markdownName, '.html');
        htmlName = getApacheDirName(htmlName, directoryToWalk);
        console.log('Writing:', htmlName);
        fs.writeFile(htmlName, html, function(err) {
            if (err) { throw err; }
        });
    });
}

function writeSummary(curDir, index, report, directoryToWalk, directories) {

    var summaryFileName = curDir + '/Summary.md';
    var relativeName = summaryFileName.substr(directoryToWalk.length + 1, summaryFileName.length);
    var masterListLineItem = utils.makeMarkdownLink(utils.swapExtension(relativeName, '.html'));

    masterListOfNames.push(masterListLineItem);
    fs.writeFile(summaryFileName, getFileNamesAsMarkdownList(curDir, report), function (err) {
        if (err) {
            throw(err);
        } else {
            if (index === directories.length - 1) {
                writeHtmlFiles(report, directoryToWalk);
                var masterFileName = directoryToWalk + '/master-list.md';
                console.log(masterListOfNames);
                writeMasterFile(masterFileName, masterListOfNames);
            }
        }
    });
}

function makePage(curDir, index, report, directoryToWalk, directories) {

    console.log("CurDir:", curDir);
    var apacheName = getApacheDirName(curDir, directoryToWalk);
    console.log('ApacheDirNameCurDir: ', apacheName);

    mkdirp(apacheName, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
    });
    // console.log('Report: ', report);
    // console.log('FileNamesAsMarkdownList from ' + curDir + ':\n' + fileNames);
    writeSummary(curDir, index, report, directoryToWalk, directories)
}

module.exports = makePage;