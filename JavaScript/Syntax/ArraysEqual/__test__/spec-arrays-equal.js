/**
 * Created by charlie on 10/20/15.
 */


describe("Arrays are equal", function() {

    'use strict';

    var elvenUtils = require('elven-code').elfUtils;
    var filters = require('../public/filters');

    it("expects true to be true", function() {
        expect(true).toBe(true);
    });


    it("expects null arrays to fail", function() {
        var a1 = null;
        var a2 = [1];
        var result = elvenUtils.arraysAreEqual(a1, a2);
        expect(result).toBeFalsy();
    });

    it("expects second parameter null arrays to fail", function() {
        var a1 = [1];
        var a2 = null;
        var result = elvenUtils.arraysAreEqual(a1, a2);
        expect(result).toBeFalsy();
    });


    it("expects single member arrays to be equal", function() {
        var a1 = [1];
        var a2 = [1];
        var result = elvenUtils.arraysAreEqual(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 5 member arrays to be equal", function() {
        var a1 = [1, 2, 3, 4, 5];
        var a2 = [1, 2, 3, 4, 5];
        var result = elvenUtils.arraysAreEqual(a1, a2);
        expect(result).toBeTruthy();
    });


    it("expects original tests to pass", function() {
        var result = elvenUtils.arraysAreEqual([1, 2, [3, 4]], [1, 2, [3, 2]]);
        expect(result).toBeFalsy();

        result = elvenUtils.arraysAreEqual([1, "2,3"], [1, 2, 3]);
        expect(result).toBeFalsy();

        result = elvenUtils.arraysAreEqual([1, 2, [3, 4]], [1, 2, [3, 4]]);
        expect(result).toBeTruthy();

        result = elvenUtils.arraysAreEqual([1, 2, 1, 2], [1, 2, 1, 2]);
        expect(result).toBeTruthy();
    });
    
    it("shows how to create a simple filter and proves it works", function() {

        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var odds = filters.removeEvens(numbers);
        expect(odds).not.toContain(0);
        expect(odds).not.toContain(2);
        expect(odds).not.toContain(4);
        expect(odds).toContain(3);
        expect(odds).toContain(5);
        expect(odds).toContain(7);
        var expected = [1, 3, 5, 7, 9, 11];
        var result = elvenUtils.arraysAreEqual(expected, odds);
        expect(result).toBeTruthy();
    });
    
});

