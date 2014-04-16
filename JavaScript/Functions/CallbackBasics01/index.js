/**
 * @author Charlie
 */

function hello(func) {
    'use strict';
    $("#test02").html("It works! ");
    func();
}

$(document).ready(function() {
    "use strict";

    $("#test01").html("Document Ready called");

    hello(function() {
        $("#test03").html("It's a nine!");
    });
});
