/**
 * @author Charlie Calvert
 */
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * Test if a folder exists, if it does not, make it
 */
var ensureDir = function(folder) {
    'use strict';
    if (!fs.existsSync(folder)) {
        mkdirp(folder);
    }
    return folder;
};

/**
 * Format the JSON that holds a two dimensional array of
 * numbers representing a grid.
 */
var prettyPrintGrid = function(grid) {
    'use strict';
    data = JSON.stringify(grid);
    var result = data.replace(/\[\"/g, '\n\t[');
    return result.replace(']]', ']\n]');
};

/**
 * Be sure we start with a path separator.
 */
var ensureStartsWithPathSep = function(fileName) {
    'use strict';
    if (fileName.substring(0, 1) !== path.sep) {
        fileName = path.sep + fileName;
    }
    return fileName;
};

var ensureEndsWithPathSep = function(fileName) {
    'use strict';
    if (fileName.substring(fileName.length, 1) !== path.sep) {
        fileName = fileName + path.sep;
    }
    return fileName;
};

/**
 * All I'm really doing here is reminding myself that path.join
 * solves the problem of properly appending a file name onto a path
 *
 * @param {Object} pathName
 * @param {Object} fileName
 */
var elfJoin = function(pathName, fileName) {
    'use strict';
    return path.join(pathName, fileName);
};

var padNumber = function(numberToPad, width, padValue) {
    'use strict';
    padValue = padValue || '0';
    numberToPad = numberToPad + '';
    if (numberToPad.length >= width) {
        return numberToPad;
    } else {
        return new Array(width - numberToPad.length + 1).join(padValue) + numberToPad;
    }
};

function stripWhiteSpace(value) {
    'use strict';
    return String(value)
        .replace(/ /g, '')
        .replace(/\t/g, '')
        .replace(/\r/g, '')
        .replace(/\n/g, '');
}

function stripPunctuation(value) {
    'use strict';
    return String(value)
        .replace(/\./g, '')
        .replace(/!/g, '')
        .replace(/\?/g, '')
        .replace(/,/g, '');
}

function htmlEscape(str) {
    'use strict';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function htmlUnescape(str) {
    'use strict';
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}


function getHomeDir() {
    'use strict';
    var homeDir = null;
    if (os.platform() === 'linux') {
        homeDir = process.env.HOME;
    } else if (os.platform() === 'win32') {
        homeDir = process.env.USERPROFILE;
    }
    return homeDir;
}


exports.ensureDir = ensureDir;
exports.prettyPrintGrid = prettyPrintGrid;
exports.ensureStartsWithPathSep = ensureStartsWithPathSep;
exports.ensureEndsWithPathSep = ensureEndsWithPathSep;
exports.elfJoin = elfJoin;
exports.padNumber = padNumber;
exports.stripWhiteSpace = stripWhiteSpace;
exports.stripPunctuation = stripPunctuation;
exports.htmlEscape = htmlEscape;
exports.htmlUnescape = htmlUnescape;
exports.getHomeDir = getHomeDir;
