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
