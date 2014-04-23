/**
 * @author Charlie Calvert
 */

// getNine is assigned a function that returns the number 9
var getNine01 = function() {
    'use strict';
    return 9;
};

/* 
 * getNine02 is set to the number 9. Notice the
 * the parentheses at the end of the statement.
 * They force the function to be called during the
 * assignment
 */
var getNine02 = (function() {
    'use strict';
    return 9;
})();

$(document).ready(function() {
    "use strict";

    // We call getNine01() because it is a function
    var result01 = getNine01();
    $("#test01").html(result01);

    // Get Nine02 is not a function, but a simple number
    // Hence it is not called. Notice there are no parentheses
    var result02 = getNine02;
    $("#test02").html(result02);
});
