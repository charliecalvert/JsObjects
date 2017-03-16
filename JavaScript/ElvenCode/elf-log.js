/**
 * Created by charlie on 11/30/15.
 */

var debug = require('debug')('elflog');

function elfLog(name) {
    'use strict';
    console.log('ELF LOG CONSTRUCTOR', name);
    this.elfName = name;
}

// Set an environment variable to elfName to see output: see Log method.
elfLog.elfName='';
elfLog.logLevelNanoDetails = -1;
elfLog.logLevelNano = 0;
elfLog.logLevelMinorDetails = 1;
elfLog.logLevelDetails = 2;
elfLog.logLevelWarn = 3;
elfLog.logLevelError = 4;
elfLog.logLevelInfo = 5;
elfLog.logLevelSilent = 6;
elfLog.lastMessage = '';
elfLog.showLog = true;
elfLog.debugLevel = undefined;

elfLog.init = function() {
    'use strict';
    this.debugLevel = this.logLevelSilent;
};

elfLog.getLevel = function(level) {
    'use strict';
    switch (level) {
        case -1:
            return 'Nano-Details';
        case 0:
            return 'Nano';
        case 1:
            return 'Minor-Details';
        case 2:
            return 'Details';
        case 3:
            return 'Warning';
        case 4:
            return 'Error';
        case 5:
            return 'Information';
        case 6:
            return 'Silent';
        default:
            return 'Unknown level' + level;
    }

};

elfLog.setLevel = function(level) {
    'use strict';
    debug('level:', this.getLevel(level));
    if (level === undefined) {
        throw 'Log Level Undefined in setLevel';
    }
    this.debugLevel = level;
};

elfLog.setMessage = function(level, message01, message02, message03) {
    'use strict';
    if (level >= this.debugLevel) {
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

elfLog.log = function(level, message01, message02, message03) {
    'use strict';
    message01 = this.setMessage(level, message01, message02, message03);
    this.showLog = (this.elfName === process.env.ELFNAME);
    if (this.showLog && message01.trim().length > 0) {
        console.log(message01);
    }
    return message01;
};

elfLog.say = function(message01, message02, message03) {
    return this.log(this.debugLevel, message01, message02, message03);
}

elfLog.emptyLine = function() {
    'use strict';
    console.log('');
};

elfLog.nanoDetails = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelNanoDetails, message01, message02, message03);
};

elfLog.nano = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelNano, message01, message02, message03);
};

elfLog.minorDetails = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelMinorDetails, message01, message02, message03);
};

elfLog.details = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelDetails, message01, message02, message03);
};

elfLog.error = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelError, message01, message02, message03);
};

elfLog.warning = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelWarn, message01, message02, message03);
};

elfLog.info = function(message01, message02, message03) {
    'use strict';
    return this.log(elfLog.logLevelInfo, message01, message02, message03);
};

elfLog.init();

module.exports = elfLog;
