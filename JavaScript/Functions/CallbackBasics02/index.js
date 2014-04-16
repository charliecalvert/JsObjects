/**
 * @author Charlie Calvert
 */

function returnTwo() {
    'use strict';
    return 2;
}

function passFunc(func) {
    'use strict';
    return func();
}

$(document).ready(function() {
    "use strict";
    var result = passFunc(returnTwo);
    $("#test01").html(result);

});
