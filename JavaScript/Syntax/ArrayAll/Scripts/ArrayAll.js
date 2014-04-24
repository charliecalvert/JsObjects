/**
 * @author Charlie Calvert
 */

var app = {
    arrayAll: null,
    csvToArray: null,

    init: function() {
        'use strict';
        if (!this.arrayAll) {
            this.arrayAll = new app.ArrayAll();
        }

        if (!this.csvToArray) {
            this.csvToArray = new app.CsvToArray();
        }
        return this.arrayAll;
    }
};

app.ArrayAll = (function() {
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



    // If you pass in [a, b, c] it will return a and leave [b, c]
    ArrayAll.prototype.getFirst = function(myArray) {
        return myArray.shift();
    };

    ArrayAll.prototype.isEqual = function(one, two) {
        if (one === two) return true;

        if (one === null || two === null) return false;

        if (one.length !== two.length) {
            return false;
        }

        for (var count = 0; count < one.length; count++) {
            if (one[count] !== two[count]) {
                return false;
            }
        }

        return true;
    };

    return ArrayAll;

}());

$(document).ready(function() {
    'use strict';
    app.init();
});
