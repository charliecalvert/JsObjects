var ImageSize = (function() {
    'use strict';

    var lwip = require('lwip');
    var elfUtils = require('elven-code').elfUtils;
    var walker = require('elven-code').walker;
    var elfConfig = require('elven-code').elfConfig;
    var elfLog = require('elven-code').elfLog;
    var fs = require('fs');
    var path = require('path');

    var extension = '.jpg';
    var smallEnding = '-small' + extension;
    var markdown = '# Image Report';
    var allImages = [];
    var base = '/var/www/html/';
    var imageDir = '/images/canada/';

    function ImageSize() {
        elfLog.setLevel(elfLog.logLevelDetails);
    }

    function getPixsPathHome() {
        var base = process.env.HOME;
        base = elfUtils.ensureEndsWithPathSep(base);
        var path = base + 'pixs';
        return elfUtils.ensureEndsWithPathSep(path);
    }

    function getPixsPath() {
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

    function getReport(allImagesJsonFile) {
        var pather = getPixsPath();
        walker.walkDirs(pather, extension, function(fileReport) {
            var report = walker.getFullFileNames(fileReport);
            var pathToImage = report[0];
            report.forEach(function(pathToImage) {
                if (!pathToImage.endsWith(smallEnding)) {
                    makeMarkDown(pathToImage);
                    convertImage(pathToImage);
                }
            });
            writeToFile('images.md', markdown);
            writeToFile(allImagesJsonFile, JSON.stringify(allImages, null, 4) + '\n');
        });
    }

    ImageSize.prototype.loadAndRun = function() {
        elfConfig.useLocalConfig = true;
        elfConfig.load(function() {
            base = elfConfig.get('elvenImages', 'baseDir');
            imageDir = elfConfig.get('elvenImages', 'imageDir');
            var allImagesJsonFile = elfConfig.get('elvenImages', 'allImagesJsonFile');

            elfLog.log(elfLog.logLevelDetails, allImagesJsonFile + ' ' + imageDir);
            getReport(allImagesJsonFile);
        });
    };

    return ImageSize;
})();

var imageSize = new ImageSize();
imageSize.loadAndRun();
