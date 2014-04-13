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

    return ArrayAll;

}());

$(document).ready(function() {
    'use strict';
    app.init();
});
