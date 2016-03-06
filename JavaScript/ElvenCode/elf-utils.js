/**
 * @author Charlie Calvert
 */
var path = require('path');
var fs = require('fs');
var os = require('os');
var mkdirp = require('mkdirp');
var Guid = require('guid');


/**
 * Format the JSON that holds a two dimensional array of
 * numbers representing a grid.
 */
var prettyPrintGrid = function(grid) {
    'use strict';
    var data = JSON.stringify(grid);
    var result = data.replace(/\[\"/g, '\n\t[');
    return result.replace(']]', ']\n]');
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

function getGuid() {
    'use strict';
    return Guid.create();
}

function getGuidFromMarkdown(fileName, test) {
    'use strict';
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var result = data.match(/<!-- GUID: (.+?) -->/i)[1];
        test(result);
    });
}

/*******************
 * Arrays
 ******************/

function isArray(itemToCheck) {
    'use strict';
    return Object.prototype.toString.call(itemToCheck) === '[object Array]';
}

function arrayDifference(firstArray, secondArray) {
    return firstArray.filter(function(item) {
        return secondArray.indexOf(item) < 0;
    });
}

// Flawed solution. Read comments: http://stackoverflow.com/a/1187628
function arraySymmetricDifference (firstArray, secondArray) {

    var temp = [];
    var difference = [];

    for (var i = 0; i < firstArray.length; i++) {
        console.log(firstArray[i]);
        temp[firstArray[i]] = true;
        console.log(temp[firstArray[i]]);
    }

    console.log('temp:', temp);
    console.log(firstArray);

    for (i = 0; i < secondArray.length; i++) {
        if (temp[secondArray[i]]) {
            delete temp[secondArray[i]];
        } else {
            temp[secondArray[i]] = true;
        }
    }

    console.log(temp);
    console.log(firstArray);

    for (var item in temp) {
        console.log(item);
        difference.push(item);
    }

    return difference;
}

/*******************
 * Strings
 ******************/

function getFirstWord(value) {
    return value.split(' ')[0];
}

function insertString(fileName, itemToInsert, index) {
    'use strict';
    var output = [fileName.slice(0, index), itemToInsert, fileName.slice(index)].join('');
    return output;
}

function removeFromEndAtCharacter(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char));
}

function endsWith(value, suffix) {
    'use strict';
    return value.indexOf(suffix, this.length - suffix.length) !== -1;
}

var getLastCharacterOfString = function(value) {
    return value.substring(value.length - 1);
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

// jscs:disable validateQuoteMarks
function htmlUnescape(str) {
    'use strict';
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}
// jscs:enable validateQuoteMarks


/*******************
 * File Related
 ******************/

function writeFile(fileName, contents, callback) {
    'use strict';
    fs.writeFile(fileName, contents, function(err) {
        callback({
            result: 'success'
        });
    });
}

function readFile(fileName, callback) {
    'use strict';
    fs.readFile(fileName, 'utf8', function(err, fileContents) {
        if (err) {
            throw (err);
        }
        callback({
            'result': fileContents
        });
    });
}

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}

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

    if (getLastCharacterOfString(fileName) !== path.sep) {
        fileName = fileName + path.sep;
    }
    return fileName;
};

// from: http://stackoverflow.com/a/1203361
function getExtension(fileName) {
    'use strict';
    fileName = fileName.trim();
    var array = fileName.split('.');
    if (array.length === 1 || (array[0] === '' && array.length === 2)) {
        return '';
    }
    return array.pop().toLowerCase();
}

function swapExtension(fileName, ext) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.')) + ext;
}

/*
 * @name: getFileNameFromPath
 *
 * We can't be sure of what the path separator will be since
 * we don't know the platform ahead of time. If you need
 * to use a pathseparator that may differ from the one for
 * the current OS, then you need to specify it:
 *
 *    var actual = eu.getFileNameFromPath(test, "\\");
 *
 * Otherwise just pass in the string and let the function handle
 * the separator automatically:
 *
 *    var actual = eu.getFileNameFromPath(test);
 */
function getFileNameFromPath(fileName, pathSeparator) {
    'use strict';
    if (typeof pathSeparator === 'undefined') {
        pathSeparator = path.sep;
    }
    var index = fileName.lastIndexOf(pathSeparator);
    return fileName.substr(index + 1, fileName.length - index - 1);
}

exports.prettyPrintGrid = prettyPrintGrid;
exports.elfJoin = elfJoin;
exports.padNumber = padNumber;
exports.getGuid = getGuid;
exports.getGuidFromMarkdown = getGuidFromMarkdown;
exports.getHomeDir = getHomeDir;

// Array
exports.isArray = isArray;
exports.arrayDifference = arrayDifference;
exports.arraySymetricDifference = arraySymmetricDifference;

// Strings
exports.getFirstWord = getFirstWord;
exports.endsWith = endsWith;
exports.insertString = insertString;
exports.removeFromEndAtCharacter = removeFromEndAtCharacter;
exports.getLastCharacterOfString = getLastCharacterOfString;

exports.stripWhiteSpace = stripWhiteSpace;
exports.stripPunctuation = stripPunctuation;
exports.htmlEscape = htmlEscape;
exports.htmlUnescape = htmlUnescape;

// Files
exports.writeFile = writeFile;
exports.readFile = readFile;
exports.fileExists = fileExists;

exports.ensureDir = ensureDir;
exports.ensureStartsWithPathSep = ensureStartsWithPathSep;
exports.ensureEndsWithPathSep = ensureEndsWithPathSep;
exports.getExtension = getExtension;
exports.swapExtension = swapExtension;
exports.getFileNameFromPath = getFileNameFromPath;
