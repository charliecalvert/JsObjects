/**
 * Created by charlie on 10/20/15.
 */


fdescribe("Arrays have same elements with jquery", function() {

    'use strict';

    it("expects true to be true", function() {
        expect(true).toBe(true);
    });


    it("expects null arrays to fail", function() {
        var a1 = null;
        var a2 = [1];
        var result = $.arraysHaveSameElements(a1, a2, false);
        expect(result).toBeFalsy();
    });

    it("expects second parameter null arrays to fail", function() {
        var a1 = [1];
        var a2 = null;
        var result = $.arraysHaveSameElements(a1, a2);
        expect(result).toBeFalsy();
    });

    it("expects single member arrays to be equal", function() {
        var a1 = [1];
        var a2 = [1];
        var result = $.arraysHaveSameElements(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 5 member arrays to be equal", function() {
        var a1 = [1, 2, 3, 4, 5];
        var a2 = [1, 2, 3, 4, 5];
        var result = $.arraysHaveSameElements(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 5 member arrays with different order to be equal", function() {
        var a1 = [1, 2, 3, 5, 4];
        var a2 = [1, 2, 3, 4, 5];
        var result = $.arraysHaveSameElements(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects original test 1 to pass", function() {
        var result = $.arraysHaveSameElements([1, 2, [3, 4]], [1, 2, [3, 2]]);
        expect(result).toBeFalsy();
    });

    it("expects original test 2 to pass", function() {
        var result = $.arraysHaveSameElements([1, "2,3"], [1, 2, 3]);
        expect(result).toBeFalsy();
    });

    it("expects original jquery test 3 to pass", function() {
        var result = $.arraysHaveSameElements([1, 2, [3, 4]], [1, 2, [3, 4]]);
        expect(result).toBeTruthy();
    });

    it("expects original jquery test 4 to pass", function() {
        var result = $.arraysHaveSameElements([1, 2, 1, 2], [1, 2, 1, 2]);
        expect(result).toBeTruthy();
    });

    it("expects nested array with different ordered elements to pass", function() {
        var result = $.arraysHaveSameElements([1, 2, [3, 4]], [1, 2, [4, 3]]);
        expect(result).toBeTruthy();
    });

    it("expects nested array with different ordered sub arrays to pass", function() {
        var result = $.arraysHaveSameElements([1, [3, 4], 2], [1, 2, [4, 3]]);
        expect(result).toBeTruthy();
    });

    it("expects nested array with different ordered arrays and sub arrays to pass", function() {
        var result = $.arraysHaveSameElements([2, [3, 4], 1], [1, 2, [4, 3]]);
        expect(result).toBeTruthy();
    });

    it("expects nested array with different ordered arrays and sub arrays to fail", function() {
        var result = $.arraysHaveSameElements([2, [3, 4], 4], [1, 2, [4, 3]]);
        expect(result).toBeFalsy();
    });

    it("expects simple array with different order to pass", function() {
        var result = $.arraysHaveSameElements([1, 2, 2, 1], [1, 2, 1, 2]);
        expect(result).toBeTruthy();
    });

});


