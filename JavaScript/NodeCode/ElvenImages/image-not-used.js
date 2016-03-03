var ImagesNotUsed = (function() {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var elfConfig = require('elven-code').elfConfig;
    var elfLog = require('elven-code').elfLog;
	var mkdirp = require('mkdirp');
    var imagesUsed = [];
    var base = '/var/www/html/';

    function ImagesNotUsed() {
        elfLog.setLevel(elfLog.logLevelMinorDetails);
    }

    function arrayContains(needle, haystack) {
        return (haystack.indexOf(needle) > -1);
    }

    function push(needle, haystack) {
        if (!arrayContains(needle, imagesUsed)) {
            imagesUsed.push(needle);
        }
    }

    /*
    	function display(matches) {
    		console.log(matches);
    		console.log('First Group:', matches[1]);
    		console.log('Second Group:', matches[2]);
    		console.log('Third Group:', matches[3]);
    	}
    */

    function findMatches(line) {
        var matches = line.match(/\[\!\[([^\]]*)\]\(([^\)]*)\)\]\(([^\)]*)\)/);

        if (matches !== null) {
            for (var i = 1; i < 4; i++) {
                push(matches[i]);
            }
        }
    }

    function showImagesUsed() {
        console.log('== Images Used =======================');

        imagesUsed.forEach(function(image) {
            console.log(image);
        });

        console.log('======================================');
    }

    function arrayDifference(firstArray, secondArray) {

        var temp = [];
        var difference = [];

        for (var i = 0; i < firstArray.length; i++) {
            temp[firstArray[i]] = true;
        }

        for (i = 0; i < secondArray.length; i++) {
            if (temp[secondArray[i]]) {
                delete temp[secondArray[i]];
            } else {
                temp[secondArray[i]] = true;
            }
        }

        for (var item in temp) {
            difference.push(item);
        }

        return difference;
    }

    function processNotUsed(markdownFileWithImages, allImagesJsonFile, notUsedDir) {

        fs.readFile(markdownFileWithImages, 'utf8', function(err, result) {
            //console.log(result);
            var lines = result.split('\n');
            for (var i = 0; i < lines.length; i++) {
                findMatches(lines[i]);
            }
            showImagesUsed();
        });

        fs.readFile(allImagesJsonFile, 'utf8', function(err, result) {
            // console.log(result);
            var allImages = JSON.parse(result);
            var imagesNotUsed = arrayDifference(imagesUsed, allImages);
            // console.log('============================');
            // console.log('============================');
            var commands = '#! /bin/bash\n\n';
            imagesNotUsed.forEach(function(imageName) {
                commands += 'mv ' + path.normalize(base + imageName) + ' ' + notUsedDir + '.\n';
            });

            mkdirp(notUsedDir, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    elfLog.log(elfLog.logLevelDetails, 'Directory confirmed:' + notUsedDir);
                    fs.writeFile('moveNotUsed.sh', commands, function(err) {
                        if (err) {
                            throw err;
                        }
                        elfLog.log(elfLog.logLevelInfo, 'Wrote moveNotUsed.sh');
                    });
                }
            });

        });
    }

    ImagesNotUsed.prototype.loadConfig = function() {
		elfConfig.useLocalConfig = true;
        elfConfig.load(function() {			
            base = elfConfig.get('elvenImages', 'baseDir');
            var markdownFileWithImages = elfConfig.get('elvenImages', 'markdownFileWithImages');
            var allImagesJsonFile = elfConfig.get('elvenImages', 'allImagesJsonFile');
            var notUsedDir = elfConfig.get('elvenImages', 'notUsedDir');
            elfLog.log(elfLog.logLevelMinorDetails, base + ' ' + markdownFileWithImages + ' ' + allImagesJsonFile + ' ' + notUsedDir);
            processNotUsed(markdownFileWithImages, allImagesJsonFile, notUsedDir);
        });
    };

    return ImagesNotUsed;
})();

var imagesNotUsed = new ImagesNotUsed();
imagesNotUsed.loadConfig();
