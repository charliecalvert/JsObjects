var ImageSize = (function() {
    'use strict';

    var lwip = require('lwip');
    var elfUtils = require('elven-code').elfUtils;
    var walker = require('elven-code').walker;
    var elfConfig = require('elven-code').elfConfig;
    var elfLog = require('elven-code').elfLog;
    var fs = require('fs');
    var path = require('path');
    var utils = require('./utilities');

    var extension = '.jpg';
    var smallEnding = '-small' + extension;
    var markdown = '# Image Report';
    var allImages = [];
    var base = '/var/www/html/';
    // var imageDir = '/images/canada/';

    function ImageSize() {
        elfLog.setLevel(elfLog.logLevelDetails);
    }

    function getPixsPathHome() {
        var base = process.env.HOME;
        base = elfUtils.ensureEndsWithPathSep(base);
        var path = base + 'pixs';
        return elfUtils.ensureEndsWithPathSep(path);
    }

    function getPixsPath(imageDir) {
        return path.normalize(base + imageDir);
    }

    function getSmallName(pathToImage) {
        var withoutExtension = pathToImage.replace(/\.[^/.]+$/, '');
        return withoutExtension + smallEnding;
    }

    function makeMarkDown(pathToImage) {
        pathToImage = path.normalize(pathToImage);
        pathToImage = pathToImage.slice(base.length, pathToImage.length);
        pathToImage = elfUtils.ensureStartsWithPathSep(pathToImage);
        var smallImage = getSmallName(pathToImage);
        //markdown += '\n![' + smallImage + '](' + smallImage + ')\n';
        markdown += '\n[![' + smallImage + '](' + smallImage + ')](' + pathToImage + ')\n';
        allImages.push(pathToImage);
        allImages.push(smallImage);
    }

    function convertImage(pathToImage) {
        lwip.open(pathToImage, function(err, image) {
            // check 'err'. use 'image'.
            if (err) {
                throw err;
            }
            // image.resize(...), etc.
            var smallImage = getSmallName(pathToImage);

            image.batch()
                .scale(0.20) // scale to 20%
                .writeFile(smallImage, function(err) {
                    if (err) {
                        throw err;
                    }
                    // done.
                });
        });
    }

    function writeToFile(fileName, content) {
        fs.writeFile(fileName, content, function(err) {
            if (err) {
                throw err;
            }
            console.log('Wrote content to', fileName);
        });
    }

    function getReport(allImagesJsonFile, markdownFileWithImages, imageDir) {
        var picturePath = getPixsPath(imageDir);
        walker.walkDirs(picturePath, extension, function(fileReport) {
            var error = false;
            var report = walker.getFullFileNames(fileReport);
            var pathToImage = report[0];
            report.forEach(function(pathToImage) {
                if (error) { return; }
                if (pathToImage.indexOf(' ') !== -1) {
                    console.log('You have spaces in one or more file names:\n\n', pathToImage, '\n');
                    console.log('This is not a good idea.');
                    console.log('Fix with this command and then restart:');
                    console.log('find -name "* *" -type f | rename "s/ /_/g"');
                    error = true;
                    return;
                }
                if (!pathToImage.endsWith(smallEnding)) {
                    makeMarkDown(pathToImage);
                    convertImage(pathToImage);
                }
            });

            writeToFile(markdownFileWithImages, markdown);
            writeToFile(allImagesJsonFile, JSON.stringify(allImages, null, 4) + '\n');
        });
    }

    ImageSize.prototype.loadAndRun = function() {
        elfConfig.useLocalConfig = true;
        elfConfig.load(function() {
            var configSettings = utils.getConfigurationSettings(elfConfig);
            if (!elfUtils.fileExists(configSettings.markdownFileWithImages)) {
                getReport(configSettings.allImagesJsonFile, configSettings.markdownFileWithImages, configSettings.imageDir);
            } else {
                elfLog.log(elfLog.logLevelError, 'The destination file already exists:\n', configSettings.markdownFileWithImages);
            }
        });
    };

    return ImageSize;
})();

var imageSize = new ImageSize();
imageSize.loadAndRun();
