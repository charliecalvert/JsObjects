/**
 * @author Charlie Calvert
 */

function returnTwo() {
    return 2;
}

function passFunc(func) {
    return func();
}

$(document).ready(function() {
    "use strict";
    var result = passFunc(returnTwo);
    $("#test01").html(result);

});
