/**
 * @author Charlie Calvert
 */

// Modular pattern
var GetNine = (function() {
    'use strict';

    // Private data
    var theNumber = 0;

    // Constructor
    function GetNine(initNumber) {
        theNumber = initNumber;
    }

    // Public method
    GetNine.prototype.getNumber = function() {
        return theNumber;
    };

    // Return Constructor
    return GetNine;
})();

// JQuery ready function
$(document).ready(function() {
    'use strict';
    var getNine = new GetNine(9);
    var number = getNine.getNumber();
    $("#test01").html("Retrieving a number: " + number);
});
