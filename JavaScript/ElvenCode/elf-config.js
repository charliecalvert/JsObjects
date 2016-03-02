/**
 * @author Charlie
 */

var fs = require('fs');
var os = require('os');
var utils = require('./elf-utils');
var elfLog = require('./elf-log');

function getConfigName() {
    'use strict';
    var configFileName = 'ElvenConfig.json';
    var configName = '';
    if (os.platform() === 'darwin') {
        configName = process.env.HOME + '/.config/' + configFileName;
    } else if (os.platform() === 'linux') {
        configName = process.env.HOME + '/.config/' + configFileName;
    } else if (os.platform() === 'win32') {
        configName = process.env.USERPROFILE + '\\Config\\' + configFileName;
    }
    return configName;
}

function reportError(err) {
    'use strict';
    console.log('*********************************');
    console.log(err);
    console.log('*********************************');
    console.log('Error condition in elf-config.js!');
    console.log('This program requires a config file');
    console.log('Please put ElvenConfig.json somewhere we can find it.');
    console.log('Contrl-C to abort');
    console.log('Error condition!');
    console.log('*********************************');
}

function elvenConfig() {
    'use strict';
}

elvenConfig.configData = {};
elvenConfig.loaded = false;

elvenConfig.load = function(callback) {
    'use strict';
    var configName = getConfigName();
    try {
        elfLog.log(elfLog.logLevelDetails, 'Configuration Name: ' + configName);
        utils.readFile(configName, function(result) {
            elvenConfig.loaded = true;
            elvenConfig.configData = JSON.parse(result.result);
            elfLog.log(elfLog.logLevelDetails, 'In load: ' + JSON.stringify(elvenConfig.configData, null, 4));
            if (callback) {
                callback(elvenConfig.configData);
            }
        });
    } catch (e) {
        console.log(e);
    }
};

elvenConfig.get = function(level, property) {
    'use strict';
    return elvenConfig.configData[level][property];
};

elvenConfig.keys = function(obj) {
    'use strict';
    // console.log(elvenConfig.configData);
    if (obj) {
        return Object.keys(elvenConfig.configData[obj]);
    } else {
        return Object.keys(elvenConfig.configData);
    }
};

module.exports = elvenConfig;
