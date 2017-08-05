/**
 * Created by charlie on 11/30/15.
 */

var ElvenLog = (function() {

    var debug = require('debug')('elflog');

    function ElvenLog(name) {
        'use strict';
        console.log('ELF LOG CONSTRUCTOR', name);
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

        if (level >= this.debugLevel) {
            debug("setMessage: ", message01, message02, message03);
            if (typeof message01 !== 'string') {
                message01 = JSON.stringify(message01);
            }
            var output = this.getLevel(level) + ': ' + message01;
            if (message02) {
                output = this.getLevel(level) + ': ' + message01 + ' ' + message02;
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
        var elfNameSet = (this.elfName.length > 0 && this.elfName === process.env.ELFNAME);
        if (elfNameSet && this.showLog && message01.trim().length > 0) {
            console.log(message01);
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
