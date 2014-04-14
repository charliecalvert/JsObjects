/**
 * @author Charlie Calvert
 */

var app = {
    arrayAll: null,

    init: function() {
        'use strict';
        if (!this.arrayAll) {
            this.arrayAll = new ArrayAll();
        }
        return this.arrayAll;
    }
};

var ArrayAll = (function() {
    'use strict';

    function ArrayAll() {

    }

    ArrayAll.prototype.emptyArray = function() {
        var empty = [];
        return empty;
    };

	ArrayAll.prototype.emptyArrayCount = function() {
        var empty = [];
        return empty.length;
    };
    
    ArrayAll.prototype.letterArray = function() {
        var empty = [];
        var letters = ['a', 'b', 'c'];
        return letters.length;
    };

    ArrayAll.prototype.arrayConstructor = function() {
        var numbers = new Array(1, 2, 3, 4, 5);
        return numbers;
    };

    ArrayAll.prototype.mixedArray = function() {
        return ['a', 23, false, 'mixed types in one array'];
    };
    
    ArrayAll.prototype.convertTextToArray = function(text) {
		var array = text.split(" ");
		return array;
	};

	ArrayAll.prototype.convertCsvToArray = function(csv) {
		var array = csv.split(",");
		for (var i = 0; i < array.length; i++) {
			array[i] = array[i].trim();
		}
		return array;
	};
	
	// Source is here: http://stackoverflow.com/a/8497474/253576
	ArrayAll.prototype.convertCsvToArrayRegEx = function(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) {
        console.warn("CSVtoArray: Invalid csv text.\n\nSee http://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript for help.");
        console.warn(text);
        return null;
    }
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
	};

    return ArrayAll;

}());

$(document).ready(function() {
    'use strict';
    app.init();
});
