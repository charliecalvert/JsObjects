/**
 * Created by charlie on 3/4/16.
 */


var FindNotUsedCommands = (function() {

    var path = require('path');
    var elfUtils = require('elven-code').elfUtils;

    function FindNotUsedCommands() {
        console.log('FindNotUsed constructor');
    }

    function findNotUsed(notUsedDir, allImages, imagesUsed) {
        var imagesNotUsed = elfUtils.arrayDifference(allImages, imagesUsed);
        console.log(' ');
        console.log(imagesNotUsed);
        var commands = '#! /bin/bash\n\n';
        imagesNotUsed.forEach(function (imageName) {
            commands += 'mv "' + path.normalize(base + imageName) + '" ' + notUsedDir + '.\n';
        });
        return commands;
    }

    FindNotUsedCommands.prototype.getCommands = function(notUsedDir, allImages, imagesUsed ) {
        console.log('All Images:\n', allImages);
        console.log('');
        console.log('Images Used:\n', imagesUsed);
        var commands = findNotUsed(notUsedDir, allImages, imagesUsed);
        return commands;
    };

    return FindNotUsedCommands;
})();

module.exports = FindNotUsedCommands;