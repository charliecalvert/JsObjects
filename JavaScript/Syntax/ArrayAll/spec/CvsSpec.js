describe("An Array Suite", function() {
    'use strict';

    const app = require("../public/app.js");

    beforeAll(function() {
        app.init();
    });

    it("can convert CSV to an array", function() {
        var csv = '1, 2, 3, "four", 5, "six"';


        var array = app.csvToArray.convertCsvToArray(csv);
        var value = array[3];
        expect(value).toBe('four');
    });

    it("can convert CSV to an array with apostrophe", function() {
        var csv = '1, 2, 3, "four", 5, "six", "can\'t"';


        var array = app.csvToArray.convertCsvToArray(csv);
        var value = array[6];
        expect(value).toBe("can\'t");
    });

    it("can convert CSV to an array with RegEx", function() {
        var csv = "1, 2, 3, 'four', 5, 'six'";
        var array = app.csvToArray.convertCsvToArrayRegEx(csv);
        var value = array[3];
        expect(value).toBe('four');
    });

    it("can convert CSV to an array with Nadel", function() {
        var csv = '1,2,3,"four",5,"six"';
        var array = app.csvToArray.convertCsvToArrayNadel(csv);
        var value = array[0][3];
        expect(value).toBe('four');
    });

});