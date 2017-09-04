/**
 * @author Charlie Calvert
 */

const path = require('path');
const fs = require('fs');
const os = require('os');
const mkdirp = require('mkdirp');
const Guid = require('uuid');

/**
 * All I'm really doing here is reminding myself that path.join
 * solves the problem of properly appending a file name onto a path
 *
 * @param {Object} pathName
 * @param {Object} fileName
 */
const elfJoin = function(pathName, fileName) {
    'use strict';
    return path.join(pathName, fileName);
};

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

function getGuid() {
    'use strict';
    return Guid.create();
}

function getHomeDir() {
    'use strict';
    let homeDir = null;
    if (os.platform() === 'linux') {
        homeDir = process.env.HOME;
    } else if (os.platform() === 'win32') {
        homeDir = process.env.USERPROFILE;
    }
    return homeDir;
}

/**
 * Format the JSON that holds a two dimensional array of
 * numbers representing a grid.
 */
var prettyPrintGrid = function(grid) {
    'use strict';
    let data = JSON.stringify(grid);
    let result = data.replace(/\[\"/g, '\n\t[');
    return result.replace(']]', ']\n]');
};

/*******************
 * Dates
 ******************/

function createDate(dateSeparator, divider, timeSeparator) {
    // TODO: Compare speed of padSlow and pad
    function padSlow(number) {
        return padNumber(number, 2, 0);
    }

    function pad(n) {
        return (n < 10) ? ('0' + n) : ('' + n);
    }

    const date = new Date();
    return date.getFullYear() + dateSeparator +
        pad(date.getMonth() + 1) + dateSeparator +
        pad(date.getDate()) + divider +
        pad(date.getHours()) + timeSeparator +
        pad(date.getMinutes()) + timeSeparator +
        pad(date.getSeconds());
}

function getHyphenDate() {
    const hyphen = "-";
    return createDate(hyphen, hyphen, hyphen);
}

function getNormalDate() {
    const hyphen = "-";
    const colon = ":";
    const space = " ";
    return createDate(hyphen, space, colon);
}


/*******************
 * Arrays
 ******************/

const arrayContains = function(target, value) {
    'use strict';
    let found = false;
    for (let i = 0; i < target.length && !found; i++) {
        if (target[i] === value) {
            found = true;
        }
    }
    return found;
};

function arrayDifference(firstArray, secondArray) {
    'use strict';
    return firstArray.filter(function(item) {
        return secondArray.indexOf(item) < 0;
    });
}

// Flawed solution. Read comments: http://stackoverflow.com/a/1187628
function arraySymmetricDifference(firstArray, secondArray) {
    'use strict';
    let temp = [];
    let difference = [];

    for (let i = 0; i < firstArray.length; i++) {
        console.log(firstArray[i]);
        temp[firstArray[i]] = true;
        console.log(temp[firstArray[i]]);
    }

    console.log('temp:', temp);
    console.log(firstArray);

    for (let i = 0; i < secondArray.length; i++) {
        if (temp[secondArray[i]]) {
            delete temp[secondArray[i]];
        } else {
            temp[secondArray[i]] = true;
        }
    }

    console.log(temp);
    console.log(firstArray);

    for (let item in temp) {
        console.log(item);
        difference.push(item);
    }

    return difference;
}

function isArray(itemToCheck) {
    'use strict';
    return Object.prototype.toString.call(itemToCheck) === '[object Array]';
}

/*******************
 * Strings
 ******************/

function endsWith(value, suffix) {
    'use strict';
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

function getFirstWord(value) {
    'use strict';
    return value.split(' ')[0];
}

const getLastCharacterOfString = function(value) {
    'use strict';
    return value.substring(value.length - 1);
};

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

function insertString(fileName, itemToInsert, index) {
    'use strict';
    return [fileName.slice(0, index), itemToInsert, fileName.slice(index)].join('');
}

const padNumber = function(numberToPad, width, padValue) {
    'use strict';
    padValue = padValue || '0';
    numberToPad = numberToPad + '';
    if (numberToPad.length >= width) {
        return numberToPad;
    } else {
        return new Array(width - numberToPad.length + 1).join(padValue) + numberToPad;
    }
};

function removeCharactersFromStartOfString(value, numberToDelete) {
    'use strict';
    return value.slice(numberToDelete, value.length);
}

function removeFromEndAtCharacter(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char));
}

function stripPunctuation(value) {
    'use strict';
    return String(value)
        .replace(/\./g, '')
        .replace(/!/g, '')
        .replace(/\?/g, '')
        .replace(/,/g, '');
}

function stripWhiteSpace(value) {
    'use strict';
    return String(value)
        .replace(/ /g, '')
        .replace(/\t/g, '')
        .replace(/\r/g, '')
        .replace(/\n/g, '');
}

/*******************
 * File Related
 ******************/

/* Creates directory with name like:
 *
 *   /home/charlie/2017-09-03-21-09-09
 *
 */
function createDateDir() {
    let dateDirString = ensureEndsWithPathSep(process.env.HOME) +
            getHyphenDate();
    ensureDir(dateDirString);
    console.log(dateDirString);
    return dateDirString;
}

function deleteFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.unlink(fileName, (err) => {
            if (err) {
                reject(err);
            }
            resolve( {result: 'success'} );
        });
    });
}

function deleteDirectory(path) {
    return new Promise(function(resolve, reject) {
        fs.rmdir(path, (err) => {
            if (err) {
                reject(err);
            }
            const result = {
                result: 'success',
                path: path
            };
            resolve(result);
        });
    });
}

function directoryExists(path) {
    'use strict';
    let result = true;
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        result = false;
    }
    return result;
}

/**
 * Test if a folder exists, if it does not, make it
 */
function ensureDir(folder) {
    'use strict';
    if (!fs.existsSync(folder)) {
        mkdirp(folder);
    }
    return folder;
}

/**
 * Be sure we start with a path separator.
 */
function ensureStartsWithPathSep(fileName) {
    'use strict';
    if (fileName.substring(0, 1) !== path.sep) {
        fileName = path.sep + fileName;
    }
    return fileName;
}

function ensureEndsWithPathSep(fileName) {
    'use strict';

    if (getLastCharacterOfString(fileName) !== path.sep) {
        fileName = fileName + path.sep;
    }
    return fileName;
}

function fileExists(filePath) {
    'use strict';
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

// from: http://stackoverflow.com/a/1203361
function getExtension(fileName) {
    'use strict';
    fileName = fileName.trim();
    const array = fileName.split('.');
    if (array.length === 1 || (array[0] === '' && array.length === 2)) {
        return '';
    }
    return array.pop().toLowerCase();
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
    const index = fileName.lastIndexOf(pathSeparator);
    return fileName.substr(index + 1, fileName.length - index - 1);
}

/*
 * @name: readFile
 *
 * To use promise, don't pass a callback
 */
function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

function swapExtension(fileName, ext) {
    'use strict';
    return fileName.substr(0, fileName.lastIndexOf('.')) + ext;
}

/*
 * @name: writeFile
 *
 * @param: fileName
 * @param: contents
 *
 * To use promise, don't pass a callback
 */
function writeFile(fileName, contents, callback) {
    'use strict';
    //console.log('writing', fileName);
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(fileName, contents, 'utf8', function(err) {
                if (err) {
                    reject(err);
                }
                resolve({
                    result: 'success'
                });
            });
        });
    } else {
        fs.writeFile(fileName, contents, 'utf8', function(err) {
            if (err) {
                throw (err);
            }
            callback({
                result: 'success'
            });
        });
    }
}

/*******************************************
 * Exports                                 *
 *******************************************/

exports.elfJoin = elfJoin;
exports.getGuidFromMarkdown = getGuidFromMarkdown;
exports.getGuid = getGuid;
exports.getHomeDir = getHomeDir;
exports.padNumber = padNumber;
exports.prettyPrintGrid = prettyPrintGrid;

// Dates
exports.createDate = createDate;
exports.getNormalDate = getNormalDate;
exports.getHyphenDate = getHyphenDate;

// Array
exports.arrayContains = arrayContains;
exports.arrayDifference = arrayDifference;
exports.arraySymetricDifference = arraySymmetricDifference;
exports.isArray = isArray;

// Strings
exports.endsWith = endsWith;
exports.getFirstWord = getFirstWord;
exports.getLastCharacterOfString = getLastCharacterOfString;
exports.htmlEscape = htmlEscape;
exports.htmlUnescape = htmlUnescape;
exports.insertString = insertString;
exports.removeCharactersFromStartOfString = removeCharactersFromStartOfString;
exports.removeFromEndAtCharacter = removeFromEndAtCharacter;
exports.stripPunctuation = stripPunctuation;
exports.stripWhiteSpace = stripWhiteSpace;

// Files
exports.createDateDir = createDateDir;
exports.deleteFile = deleteFile;
exports.deleteDirectory = deleteDirectory;
exports.directoryExists = directoryExists;
exports.ensureDir = ensureDir;
exports.ensureEndsWithPathSep = ensureEndsWithPathSep;
exports.ensureStartsWithPathSep = ensureStartsWithPathSep;
exports.fileExists = fileExists;
exports.getExtension = getExtension;
exports.getFileNameFromPath = getFileNameFromPath;
exports.readFile = readFile;
exports.swapExtension = swapExtension;
exports.writeFile = writeFile;
