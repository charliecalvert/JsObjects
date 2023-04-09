var filesystem = require("fs");
var path = require("path");

function rename(from, to) {
    filesystem.rename(from, to, function(err) {
        if (err) {
            throw(err);
        }
    });
}

function testMain(file, oldPattern, newPattern) {
    var base = path.basename(file, '.' + oldPattern);
    var ext = path.extname(file);
    var destination = base + '.' + newPattern;
    console.log('mv ' + file + ' ' + destination );
    rename(file, destination);
}

var getAllFilesFromFolder = function(dir, oldPattern, newPattern) {

    var results = [];

    var mainName;

    filesystem.readdirSync(dir).forEach(function(file) {
        var test = new RegExp(oldPattern).test(file)
        if (test) {
            testMain(file, oldPattern, newPattern);
        }

        results.push(file);
    });

    return results;

};


var oldPattern = "jade";
var newPattern = "pug";
var results = getAllFilesFromFolder('.', oldPattern, newPattern);

