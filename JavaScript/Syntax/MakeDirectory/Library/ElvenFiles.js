/**
 * @author Charlie Calvert
 */

/*jshint devel: true, browser: true, strict: true, node:true */

var mkdirp = require('mkdirp');
var fs = require('fs');

var ElvenFiles = (function() {
    'use strict';

    function ElvenFiles() {

    }

    ElvenFiles.prototype.copyFile = function(source, target) {

        var rd = fs.createReadStream(source);
        rd.on("error", function(err) {
            done(err);
        });
        var wr = fs.createWriteStream(target);
        wr.on("error", function(err) {
            done(err);
        });
        wr.on("close", function(ex) {
            done('Success: ' + ex);
        });
        rd.pipe(wr);

        function done(msg) {
            console.log(msg);
        }
    };

    ElvenFiles.prototype.createDirectory = function(directory) {
        mkdirp(directory, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Created directory");
            }
        });
    };

    return ElvenFiles;

})();


exports.elvenFiles = new ElvenFiles();
