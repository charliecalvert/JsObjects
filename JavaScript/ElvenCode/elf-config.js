/**
 * @author Charlie Calvert
 */

var fs = require('fs');
var os = require('os');
var utils = require('./elf-utils');
var elfLog = require('./elf-log');

function getConfigNameGlobal() {
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

function getConfigNameLocal() {
    'use strict';
    var configFileName = 'ElvenConfig.json';
    var configName = '';
    if (os.platform() === 'darwin') {
        configName = 'config/' + configFileName;
    } else if (os.platform() === 'linux') {
        configName = 'config/' + configFileName;
    } else if (os.platform() === 'win32') {
        configName = 'Config\\' + configFileName;
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
elvenConfig.useLocalConfig = false;

var getConfigName = function() {
    if (elvenConfig.useLocalConfig) {
        return getConfigNameLocal();
    } else {
        return getConfigNameGlobal();
    }
};

elvenConfig.load = function(callback) {
    'use strict';
    var configName = getConfigName();
    try {
        elfLog.log(elfLog.logLevelMinorDetails, 'Configuration Name: ' + configName);
        utils.readFile(configName, function(result) {
            elvenConfig.loaded = true;            
            try {
                elvenConfig.configData = JSON.parse(result.result);
            } catch(e) {
                console.log('Could not parse config file', e);
                callback(e);
            }
            elfLog.log(elfLog.logLevelMinorDetails, 'In load: ' + JSON.stringify(elvenConfig.configData, null, 4));
            if (callback) {
                callback(null, elvenConfig.configData);
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
