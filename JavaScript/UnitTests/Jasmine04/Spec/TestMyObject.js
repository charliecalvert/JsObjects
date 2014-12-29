describe("MyObject", function() {
    'use strict';

    var obj = new MyObject("clean"); // sets initial state

    afterEach(function() {
        obj.setState("clean");
    });

    it("changes state", function() {
        obj.setState("dirty");
        console.log(obj);
        expect(obj.getState()).toEqual("dirty");
    });

    it("adds states", function() {
        obj.addState("packaged");
        expect(obj.getState()).toEqual(["clean", "packaged"]);
    });
});

describe("MyObject", function() {
    'use strict';

    var obj = new MyObject();

    beforeEach(function() {
        obj.setState("clean");
    });

    it("changes state", function() {
        obj.setState("dirty");
        expect(obj.getState()).toEqual("dirty");
    });

    it("adds states", function() {
        obj.addState("packaged");
        expect(obj.getState()).toEqual(["clean", "packaged"]);
    });
});

describe("Test Custom Matcher called toBeBetween", function() {
    'use strict';

    beforeEach(function() {
        jasmine.addMatchers({
            toBeBetween: function() {
                return {
                    compare: function(actual, rangeFloor, rangeCeiling) {
                        if (rangeFloor > rangeCeiling) {
                            var temp = rangeCeiling;
                            rangeCeiling = rangeFloor;
                            rangeFloor = temp;
                        }
                        return {
                            pass: actual > rangeFloor && actual < rangeCeiling,
                            message: actual + ' is not between ' + rangeFloor + " and " + rangeCeiling
                        };
                    }
                };
            }
        });
    });

    it("10 is between 5 and 30", function() {
        expect(10).toBeBetween(5, 30);
    });

    it("100 is between 500 and 30", function() {
        expect(100).toBeBetween(500, 30);
    });

    it("29 is between 5 and 30", function() {
        expect(29).toBeBetween(5, 30);
    });

});
