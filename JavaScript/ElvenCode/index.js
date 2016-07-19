exports.elfUtils = require('./elf-utils');
exports.elfLog = require('./elf-log');
exports.elfConfig = require('./elf-config');
exports.walker = require('./walker');

exports.getPackageDescription = function() {
    'use strict';
    var myDescription = 'This is Charlie Calvert\'s ElvenCode package';
    console.log(myDescription);
    return myDescription;
};
