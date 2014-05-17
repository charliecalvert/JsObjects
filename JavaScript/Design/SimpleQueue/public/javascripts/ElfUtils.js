/**
 * @author Charlie Calvert
 */

Elf = {};

Elf.Utils = {

};


// Based on http://stackoverflow.com/a/16436975
Elf.Utils.arraysEqual = function(array01, array02) {
    'use strict';

    if (array01 === null || array02 === null) {
        return false;
    }
    if (array01.length != array02.length) {
        return false;
    }
    if (array01 === array02) {
        return true;
    }

    for (var i = 0; i < array01.length; ++i) {
        if (array01[i] !== array02[i]) return false;
    }
    return true;
};

Elf.Utils.padNumber = function(numberToPad, width, padValue) {
    'use strict';
    padValue = padValue || '0';
    numberToPad = numberToPad + '';
    if (numberToPad.length >= width) {
        return numberToPad;
    } else {
        return new Array(width - numberToPad.length + 1).join(padValue) + numberToPad;
    }
};


Elf.Utils.stripWhiteSpace = function(value) {
    'use strict';
    return String(value)
        .replace(/ /g, '')
        .replace(/\t/g, '')
        .replace(/\r/g, '')
        .replace(/\n/g, '');
};

Elf.Utils.stripPunctuation = function(value) {
    'use strict';
    return String(value)
        .replace(/\./g, '')
        .replace(/!/g, '')
        .replace(/\?/g, '')
        .replace(/,/g, '');
};

Elf.Utils.htmlEscape = function(str) {
    'use strict';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
};

Elf.Utils.htmlUnescape = function(str) {
    'use strict';
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
};
