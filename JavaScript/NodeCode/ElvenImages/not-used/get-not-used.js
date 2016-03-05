/**
 * Created by charlie on 3/4/16.
 */



var ImagesNotUsed = (function() {
    'use strict';

    var fs = require('fs');
    var elfConfig = require('elven-code').elfConfig;
    var elfLog = require('elven-code').elfLog;
    var mkdirp = require('mkdirp');
    var utils = require('../utilities');
    var GetImagesUsed = require('./get-images-used');
    var FindNotUsedCommands = require('./find-not-used-commands');
    var getImagesUsed;

    var base = '/var/www/html/';

    function ImagesNotUsed() {
        elfLog.setLevel(elfLog.logLevelMinorDetails);
        getImagesUsed = new GetImagesUsed();
    }

    function writeNotUsed(notUsedDir, commands) {
        mkdirp(notUsedDir, function (err) {
            if (err) {
                console.error(err);
            } else {
                elfLog.log(elfLog.logLevelDetails, 'Directory confirmed:' + notUsedDir);
                fs.writeFile('moveNotUsed.sh', commands, function (err) {
                    if (err) {
                        throw err;
                    }
                    elfLog.log(elfLog.logLevelInfo, 'Wrote moveNotUsed.sh');
                });
            }
        });
    }

    function createMoveCommands(notUsedDir, allImagesJsonFile) {
        fs.readFile(allImagesJsonFile, 'utf8', function (err, allImagesAsString) {
            var findNotUsedCommands = new FindNotUsedCommands();
            var allImages = JSON.parse(allImagesAsString);
            var commands = findNotUsedCommands.getCommands(notUsedDir, allImages, getImagesUsed.imagesUsed);
            writeNotUsed(notUsedDir, commands);
        });
    }

    function processNotUsed(markdownFileWithImages, allImagesJsonFile, notUsedDir) {

        fs.readFile(markdownFileWithImages, 'utf8', function(err, result) {
            //console.log(result);
            var lines = result.split('\n');
            for (var i = 0; i < lines.length; i++) {
                getImagesUsed.findMatches(lines[i]);
            }
            createMoveCommands(notUsedDir, allImagesJsonFile);
        });
    }

    ImagesNotUsed.prototype.loadConfig = function() {
        elfConfig.useLocalConfig = true;
        elfConfig.load(function() {
            var settings = utils.getConfigurationSettings(elfConfig);
            base = settings.base;
            var markdownFileWithImages = settings.markdownFileWithImages;
            var allImagesJsonFile = settings.allImagesJsonFile;
            var notUsedDir = settings.notUsedDir;
            elfLog.log(elfLog.logLevelMinorDetails, base + ' ' + markdownFileWithImages + ' ' + allImagesJsonFile + ' ' + notUsedDir);
            processNotUsed(markdownFileWithImages, allImagesJsonFile, notUsedDir);
        });
    };

    return ImagesNotUsed;
})();

module.exports = ImagesNotUsed;