/**
 * Created by charlie on 10/20/15.
 */

// Similar to here: http://stackoverflow.com/a/14853974
var arraysAreEqual = function (array1, array2) { 'use strict';

    // if the other array is a falsy value, return
    if (!array1 || !array2)
        return false;

    // compare lengths - can save a lot of time
    if (array1.length != array2.length)
        return false;

    for (var i = 0, l = array1.length; i < l; i++) {
        // Check if we have nested arrays
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arraysAreEqual(array1[i], array2[i]))
                return false;
        }
        else if (array1[i] != array2[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

var arraysHaveSameElements = function (array1, array2) { 'use strict';

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
};

