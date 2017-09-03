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

elvenConfig.configFileContents = {};
elvenConfig.loaded = false;
elvenConfig.useLocalConfig = false;

var getConfigName = function() {
    'use strict';
    if (elvenConfig.useLocalConfig) {
        return getConfigNameLocal();
    } else {
        return getConfigNameGlobal();
    }
};

elvenConfig.load = function() {
    'use strict';

    if (elvenConfig.loaded) {
        return elvenConfig.configFileContents;
    }

    var configName = './' + getConfigName();

    elfLog.log(elfLog.logLevelMinorDetails, 'Configuration Name: ' + configName);
    var contents = fs.readFileSync(configName, 'utf8');
    elvenConfig.loaded = true;
    elvenConfig.configFileContents = JSON.parse(contents);
    return contents;
};

elvenConfig.loadAsync = function(callback) {
    'use strict';

    return new Promise(function(resolve, reject) {
        if (elvenConfig.loaded) {
            resolve(elvenConfig.configFileContents);
            return;
        }

        var configName = './' + getConfigName();

        elfLog.log(elfLog.logLevelMinorDetails, 'Configuration Name: ' + configName);
        utils.readFile(configName).then(function(result) {
            elvenConfig.loaded = true;
            try {
                //console.log('CONFIG NAME', configName);
                //console.log('DIRNAME', __dirname);
                //console.log('RESULT.RESULT', result.result);
                elvenConfig.configFileContents = JSON.parse(result.result);
            } catch (e) {
                //console.log('CONFIG NAME', configName);
                //console.log('Could not parse config file', e);
                reject(e);
            }
            elfLog.log(elfLog.logLevelNanoDetails, 'In load: ' + JSON.stringify(elvenConfig.configFileContents, null, 4));
            resolve(elvenConfig.configFileContents);
        });
    });
};

elvenConfig.save = function(callback) {
    'use strict';
    if (elvenConfig.loaded !== true) {
        throw 'Can\'t save config file if it is not first loaded';
    }
    if (typeof elvenConfig.configFileContents === 'undefined') {
        throw 'Can\'t save configFileContents as it is empty';
    }
    var configName = getConfigName();
    elfLog.minorDetails(configName);
    var fileContents = JSON.stringify(elvenConfig.configFileContents, null, 4);
    fs.writeFileSync(configName, fileContents, 'utf8');
};

elvenConfig.saveAsync = function(callback) {
    'use strict';

    return new Promise(function(resolve, reject) {
        if (elvenConfig.loaded !== true) {
            throw 'Can\'t save config file if it is not first loaded';
        }
        if (typeof elvenConfig.configFileContents === 'undefined') {
            throw 'Can\'t save configFileContents as it is empty';
        }
        var configName = getConfigName();
        elfLog.minorDetails(configName);
        var fileContents = JSON.stringify(elvenConfig.configFileContents, null, 4);
        utils.writeFile(configName, fileContents).then(function(result) {
            if (result.result !== 'success') {
                return reject('failure');
            }
            elfLog.log(elfLog.logLevelNanoDetails, 'In save: ' + result);
            resolve(result);
        });
    });
};

elvenConfig.forceReload = function() {
    elvenConfig.configFileContents = {};
    elvenConfig.loaded = false;
}

elvenConfig.get = function(level, property) {
    'use strict';
    if (property) {
        return elvenConfig.configFileContents[level][property];
    } else {
        return elvenConfig.configFileContents[level];
    }
};

elvenConfig.set = function(newValue, level, property) {
    'use strict';
    if (property) {
        elvenConfig.configFileContents[level][property] = newValue;
    } else {
        elvenConfig.configFileContents[level] = newValue;
    }
};

elvenConfig.keys = function(obj) {
    'use strict';
    // console.log(elvenConfig.configFileContents);
    if (obj) {
        return Object.keys(elvenConfig.configFileContents[obj]);
    } else {
        return Object.keys(elvenConfig.configFileContents);
    }
};

elvenConfig.getPropertyNamesAsArray = function(propertyName) {
    'use strict';
    var target;
    if (propertyName) {
        target = elvenConfig.configFileContents[propertyName];
    } else {
        target = elvenConfig.configdata;
    }
    var result = [];
    for (var property in target) {
        if (target.hasOwnProperty(property)) {
            result.push(property);
        }
    }
    return result;
};

elvenConfig.getElvenImages = function() {
    'use strict';
    if (!elvenConfig.loaded) {
        elvenConfig.load();
    }
    return elvenConfig.get('elvenImages');
};

elvenConfig.getElvenImage = function(elvenImageName) {
    'use strict';
    var elfImages = elvenConfig.getElvenImages();
    for (var i = 0; i < elfImages.length; i++) {
        if (elfImages[i].name === elvenImageName) {
            return elfImages[i];
        }
    }
};

module.exports = elvenConfig;
