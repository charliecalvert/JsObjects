/**
 * Created by charlie on 11/30/15.
 */

function elfLog() {
    'use strict';
}

elfLog.logLevelMinorDetails = 0;
elfLog.logLevelDetails = 1;
elfLog.logLevelWarn = 2;
elfLog.logLevelError = 3;
elfLog.logLevelInfo = 4;
elfLog.logLevelSilent = 5;

elfLog.debugLevel = undefined;

elfLog.init = function() {
    'use strict';
    this.debugLevel = this.logLevelSilent;
};

elfLog.setLevel = function(level) {
    'use strict';
    this.debugLevel = level;
};

elfLog.getLevel = function(level) {
    'use strict';
    switch (level) {
        case 0:
            return 'Minor-Details';
        case 1:
            return 'Details';
        case 2:
            return 'Warning';
        case 3:
            return 'Error';
        case 4:
            return 'Information';
        case 5:
            return 'Silent';
        default:
            return 'Unknown level';
    }
};

elfLog.setMessage = function(level, message) {
    'use strict';
    if (level >= this.debugLevel) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        }
        var output = this.getLevel(level) + ': ' + message;
        return output;
    }
    return '';
};

elfLog.log = function(level, message) {
    'use strict';
    message = this.setMessage(level, message);
    if (message.trim().length > 0) {
        console.log(message);
    }
};

elfLog.init();

module.exports = elfLog;
