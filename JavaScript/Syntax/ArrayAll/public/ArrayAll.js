/**
 * @author Charlie Calvert
 */

const ArrayAll = (function() {
    'use strict';

    function ArrayAll() {

    }

    ArrayAll.prototype.emptyArray = function() {
        return [];
    };

    ArrayAll.prototype.emptyArrayCount = function() {
        const empty = [];
        return empty.length;
    };

    ArrayAll.prototype.letterArray = function() {
        //const empty = [];
        const letters = ['a', 'b', 'c'];
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
        return text.split(" ");
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

        for (let count = 0; count < one.length; count++) {
            if (one[count] !== two[count]) {
                return false;
            }
        }

        return true;
    };

    return ArrayAll;

}());

module.exports = ArrayAll;

