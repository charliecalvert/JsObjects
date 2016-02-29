var lwip = require('lwip');
var elfUtils = require('elven-code').elfUtils;
var walker = require('elven-code').walker;
var fs = require('fs');
var path = require('path');
var extension = '.jpg';
var smallEnding = '-small' + extension;
var markdown = '# Image Report';

function getPixsPathHome() {
    'use strict';
    var base = process.env.HOME;
    base = elfUtils.ensureEndsWithPathSep(base);
    var path = base + 'pixs';
    return elfUtils.ensureEndsWithPathSep(path);
}

function getPixsPath() {
    'use strict';
    return '/var/www/html/images/canada/';
}

function getPathToImage() {
    'use strict';
    return getPixsPath() + '2016-02-25 09.31.50.jpg';
}

function getSmallName(pathToImage) {
    'use strict';
    var withoutExtension = pathToImage.replace(/\.[^/.]+$/, '');
    return withoutExtension + smallEnding;
}

function makeMarkDown(pathToImage) {
    'use strict';
    pathToImage = path.normalize(pathToImage);
    var smallImage = getSmallName(pathToImage);
    markdown += '\n[![' + smallImage + '](' + smallImage + ')](' + pathToImage + ')\n';
}

function convertImage(pathToImage) {
    'use strict';
    lwip.open(pathToImage, function(err, image) {
        // check 'err'. use 'image'.
        if (err) {
            throw err;
        }
        // image.resize(...), etc.
        var smallImage = getSmallName(pathToImage);

        image.batch()
            .scale(0.10) // scale to 75%
            .writeFile(smallImage, function(err) {
                if (err) {
                    throw err;
                }
                // done.
            });
    });
}

function getReport() {
    'use strict';
    var pather = getPixsPath();
    console.log('Pixspath:', pather);
    walker.walkDirs(pather, extension, function(fileReport) {
        console.log(fileReport);
        var report = walker.getFullFileNames(fileReport);
        var pathToImage = report[0];
        report.forEach(function(pathToImage) {
            if (!pathToImage.endsWith(smallEnding)) {
                makeMarkDown(pathToImage);
                convertImage(pathToImage);
            }
        });
        fs.writeFile('images.md', markdown, function(err) {
            if (err) {
                throw err;
            }
            console.log('Wrote markdown to images.md');
        });

    });
}

getReport();
