describe("An Array Suite", function() {
    'use strict';

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    it("Can create ArrayAll", function() {
        expect(app.arrayAll).not.toBeNull();
    });

    it("can find emptyArray", function() {
        expect(app.arrayAll.emptyArrayCount()).toBe(0);
    });
    
    it("shows empty array is an array", function() {
        var emptyArray = app.arrayAll.emptyArray();
        var isArray = Array.isArray(emptyArray);
        expect(isArray).toBe(true);
    });

    it("can count letterArray", function() {
        expect(app.arrayAll.letterArray()).toBe(3);
    });

    it("can find an item in constructor array", function() {
        expect(app.arrayAll.arrayConstructor()[1]).toBe(2);
    });

    it("can find an item in a mixedArray", function() {
        expect(app.arrayAll.mixedArray()[1]).toBe(23);
    });

});
