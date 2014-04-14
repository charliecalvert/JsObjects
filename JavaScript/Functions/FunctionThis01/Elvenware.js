function Elvenware() {
    'use strict';

    this.test = function() {
        console.log("Test called.");
    };

    this.useWrite = function UseWrite() {
        console.log("Writing to the console.");
    };
}

$(document).ready(function() {
    var elvenware = new Elvenware();

    $("#test").click(function() {
        elvenware.test();
    });

    $("#useWrite").click(function() {
        elvenware.useWrite();
    });
});
