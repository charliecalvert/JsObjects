/**
 * Created by charlie on 10/20/15.
 */

module.exports.removeEvens = function(numbers) { 'use strict';
    return numbers.filter(function(number) {
        return number % 2 !== 0;
    });
};

