/**
 * Created by charlie on 10/20/15.
 */

function removeEvens(numbers) { 'use strict';
    return numbers.filter(function(number) {
        return number % 2 !== 0;
    });
}

/*
function bar() { 'use strict';
    return true;
}
*/
// Similar to here: http://stackoverflow.com/a/14853974
// Checks for arrays or nested arrays that are exactly alike
function arraysAreEqual(array1, array2) { 'use strict';

/*
    if (!array1 || !array2) {
        return false;
    }

    if (array1.length != array2.length) {
        return false;
    }

    for (var i = 0, l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (!arraysAreEqual(array1[i], array2[i]))
                return false;
        }
        else if (array1[i] !== array2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
*/
    return arraysAreExactlyEqual(array1, array2, false);
}

function arraysHaveSameElements(array1, array2) { 'use strict';
    return arraysAreExactlyEqual(array1, array2, true);
}


// Works with nested arrays in different order
function arraysAreExactlyEqual(array1, array2, sort) { 'use strict';

    if (!array1 || !array2) {
        return false;
    }

    if (array1.length !== array2.length) {
        return false;
    }

    if (sort) {
        array1 = array1.sort();
        array2 = array2.sort();
    }

    for (var i = 0; i < array1.length; i++) {
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (!arraysHaveSameElements(array1[i], array2[i])) {
                return false;
            }
        } else if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

// For flat arrays, fails for nested arrays
jQuery.extend({arraysAreEqual: function(array1, array2) { 'use strict';
        return $(array1).not(array2).length === 0 && $(array2).not(array1).length === 0;
    }
}); 

// Works with nested arrays in different order
jQuery.extend({arraysHaveSameElements: function(array1, array2) { 'use strict';

        if (!array1 || !array2) {
            return false;
        }

        if (array1.length != array2.length) {
            return false;
        }

        array1 = array1.sort();
        array2 = array2.sort();

        for (var i = 0; i < array1.length; i++) {
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (!arraysHaveSameElements(array1[i], array2[i])) {
                    return false;
                }
            } else if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    }
});
