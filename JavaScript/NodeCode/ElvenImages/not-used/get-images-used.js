/**
 * Created by charlie on 3/4/16.
 */


var GetImagesUsed = (function() {

    var elfLog = require('elven-code').elfLog;
    var that;

    function GetImagesUsed() {
        elfLog.setLevel(elfLog.logLevelMinorDetails);
        that = this;
    }

    GetImagesUsed.prototype.imagesUsed = [];


     function display(matches) {
         console.log(matches);
         console.log('First Group:', matches[1]);
         console.log('Second Group:', matches[2]);
         console.log('Third Group:', matches[3]);
     }

    GetImagesUsed.prototype.showImagesUsed = function() {
        console.log('== Images Used =======================');

        this.imagesUsed.forEach(function(image) {
            elfLog.minorDetails(image);
        });

        console.log('======================================');
    };

    function arrayContains(needle, haystack) {
        return (haystack.indexOf(needle) > -1);
    }

    function pushImageUsed(needle) {
        if (!arrayContains(needle, that.imagesUsed)) {
            that.imagesUsed.push(needle);
        }
    }

    GetImagesUsed.prototype.findMatches = function(line) {
        var matches = line.match(/\[\!\[([^\]]*)\]\(([^\)]*)\)\]\(([^\)]*)\)/);

        if (matches !== null) {
            for (var i = 1; i < 4; i++) {
                pushImageUsed(matches[i]);
            }
        }
    };

    return GetImagesUsed;
})();

module.exports = GetImagesUsed;