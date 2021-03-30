describe("Arrays are equal with jquery", function() {

    'use strict';

    it("expects null arrays to fail", function() {
        var a1 = null;
        var a2 = [1];
        var result = $.arraysAreEqual(a1, a2, false);
        expect(result).toBeFalsy();
    });

    it("expects second parameter null arrays to fail", function() {
        var a1 = [1];
        var a2 = null;
        var result = $.arraysAreEqual(a1, a2);
        expect(result).toBeFalsy();
    });

    it("expects single member arrays to be equal", function() {
        var a1 = [1];
        var a2 = [1];
        var result = $.arraysAreEqual(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 5 member arrays to be equal", function() {
        var a1 = [1, 2, 3, 4, 5];
        var a2 = [1, 2, 3, 4, 5];
        var result = $.arraysAreEqual(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 5 member arrays with different order to be equal", function() {
        var a1 = [1, 2, 3, 5, 4];
        var a2 = [1, 2, 3, 4, 5];
        var result = $.arraysAreEqual(a1, a2);
        expect(result).toBeTruthy();
    });

    it("expects 4 member arrays with different members to fail", function() {
        var result = $.arraysAreEqual([1, 2, 3, 4], [1, 2, 3, 2]);
        expect(result).toBeFalsy();
    });

    it("expects original test 2 to pass", function() {
        var result = $.arraysAreEqual([1, "2,3"], [1, 2, 3]);
        expect(result).toBeFalsy();
    });

    it("expects original test 4 to pass", function() {
        var result = $.arraysAreEqual([1, 2, 1, 2], [1, 2, 1, 2]);
        expect(result).toBeTruthy();
    });
});
