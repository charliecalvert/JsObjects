/**
 * Created by charlie on 11/30/15.
 *
 * There are two ways to use Elf-Log. The key is to set the environment
 * variable called ELFNAME:
 *
 * - One module at a time (set ELFNAME to module-name)
 *   - example: export ELFNAME=my-module;
 * - All modules at once (set ELFNAME to elf-all)
 *   - example:
 *       - export ELFNAME=elf-all;
 *       - export ELF_NAME_LEVEL=0;
 *
 * You can use more than one module at a time by separating modules
 * with a semicolon:
 *   - example: export ELFNAME=my-module;my-other-module
 *
 * If you include elf-all, then any modules listed are ignored.
 *
 * To add elf-log to a module:
 *
 *   var elfLog = require('elven-code').elvenLog('my-module');
 */

var EnvTests = (function() {

    function EnvTests() {
    }

    function getEnvSplit() {
        return process.env.ELFNAME.split(';');
    }

    function isElfAll() {
        const envs = getEnvSplit();
        return envs.indexOf('elf-all') > -1;
    }

    EnvTests.prototype.levelOk = function(level, debugLevel) {
        if (process.env.ELFNAME && isElfAll() && process.env.ELF_NAME_LEVEL) {
            return level >= process.env.ELF_NAME_LEVEL;
        } else {
            return level >= debugLevel;
        }
    }

    EnvTests.prototype.elfNameSet = function(elfName) {
        if (process.env.ELFNAME) {
            if (isElfAll() || getEnvSplit().indexOf(elfName) > -1) {
                return true;
            }
        }
        return false;
    }

    return EnvTests;

})();

var ElvenLog = (function() {

    var debug = require('debug')('elflog');
    var debugBasics = require('debug')('elflog:basics');
    var debugInfo = require('debug')('elflog:info');
    var debugInfoLevel = require('debug')('elflog:debug-info-level');
    var elvenUtils = require('./elf-utils');
    var envTests = new EnvTests();

    function ElvenLog(name) {
        'use strict';
        debugBasics('ELVEN LOG CONSTRUCTOR', name);
        this.elfName = name;
        this.debugLevel = this.logLevelSilent;
    }

    // Set an environment variable called ELFNAME to elfName to see output: see Log method.
    ElvenLog.prototype.elfName = '';
    ElvenLog.prototype.logLevelNanoDetails = -1;
    ElvenLog.prototype.logLevelNano = 0;
    ElvenLog.prototype.logLevelMinorDetails = 1;
    ElvenLog.prototype.logLevelDetails = 2;
    ElvenLog.prototype.logLevelWarn = 3;
    ElvenLog.prototype.logLevelError = 4;
    ElvenLog.prototype.logLevelInfo = 5;
    ElvenLog.prototype.logLevelSilent = 6;

    ElvenLog.prototype.lastMessage = '';
    ElvenLog.prototype.showLog = true;
    ElvenLog.prototype.debugLevel = undefined;

    ElvenLog.prototype.getLevel = function(level) {
        'use strict';
        switch (level) {
            case this.logLevelSilent:
                return 'Silent';
            case this.logLevelNanoDetails:
                return 'Nano-Details';
            case this.logLevelNano:
                return 'Nano';
            case this.logLevelMinorDetails:
                return 'Minor-Details';
            case this.logLevelDetails:
                return 'Details';
            case this.logLevelWarn:
                return 'Warning';
            case this.logLevelError:
                return 'Error';
            case this.logLevelInfo:
                return 'Information';

            default:
                return 'Unknown level' + level;
        }

    };

    ElvenLog.prototype.setLevel = function(level) {
        'use strict';
        debug('setting level:', this.getLevel(level));
        if (level === undefined) {
            throw 'Log Level Undefined in setLevel';
        }
        this.debugLevel = level;
    };

    ElvenLog.prototype.setMessage = function(level, message01, message02, message03) {
        'use strict';

        debugInfoLevel(this.elfName, this.getLevel(level), this.getLevel(this.debugLevel));
        if (envTests.levelOk(level, this.debugLevel)) {
            debug("setMessage: ", message01, message02, message03);
            if (typeof message01 !== 'string') {
                message01 = JSON.stringify(message01);
            }
            var output = this.getLevel(level) + '\n  ' + message01;
            if (message02) {
                output = this.getLevel(level) + '\n  ' + message01 + ' ' + message02;
                if (message03) {
                    output = output + ' ' + message03;
                }
            }
            this.lastMessage = output;
            return output;
        }
        this.lastMessage = '';
        return this.lastMessage;
    };

    ElvenLog.prototype.log = function(level, message01, message02, message03) {
        'use strict';
        debug("LOG: ", message01, message02, message03);
        message01 = this.setMessage(level, message01, message02, message03);
        //var elfNameSet = (this.elfName.length > 0 && this.elfName === process.env.ELFNAME);
        if (envTests.elfNameSet(this.elfName) && this.showLog && message01.trim().length > 0) {
            console.log('------\n' + this.elfName + ' - ' + message01 + '');
        }
        return message01;
    };

    ElvenLog.prototype.say = function(message01, message02, message03) {
        return this.log(this.debugLevel, message01, message02, message03);
    };

    ElvenLog.prototype.emptyLine = function() {
        'use strict';
        console.log('');
    };

    ElvenLog.prototype.nanoDetails = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelNanoDetails, message01, message02, message03);
    };

    ElvenLog.prototype.nano = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelNano, message01, message02, message03);
    };

    ElvenLog.prototype.minorDetails = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelMinorDetails, message01, message02, message03);
    };

    ElvenLog.prototype.details = function(message01, message02, message03) {
        'use strict';
        debug('details: ', message01, message02, message03);
        return this.log(this.logLevelDetails, message01, message02, message03);
    };

    ElvenLog.prototype.error = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelError, message01, message02, message03);
    };

    ElvenLog.prototype.warning = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelWarn, message01, message02, message03);
    };

    ElvenLog.prototype.info = function(message01, message02, message03) {
        'use strict';
        return this.log(this.logLevelInfo, message01, message02, message03);
    };

    return ElvenLog;
})();

module.exports = ElvenLog;
