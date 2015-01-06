describe("MyObject", function() {
	'use strict';
	var obj;

	beforeEach(function() {
		obj = new MyObject("clean"); // sets initial state
	});

	afterEach(function() {
		obj.setState("clean");
	});

	it("changes state", function() {
		obj.setState("dirty");
		expect(obj.getState()).toEqual("dirty");
	});

	it("adds states", function() {
		obj.addState("packaged");
		expect(obj.getState()).toEqual([ "clean", "packaged" ]);
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
		expect(obj.getState()).toEqual([ "clean", "packaged" ]);
	});
});

var customMatchers = {
	toBeBetween : function() {
		'use strict';
		return {
			compare : function(actual, rangeFloor, rangeCeiling) {
				if (rangeFloor > rangeCeiling) {
					var temp = rangeCeiling;
					rangeCeiling = rangeFloor;
					rangeFloor = temp;
				}

				var result = {
					// Jasmine fills in actual for us and handles this object
					pass : actual > rangeFloor && actual < rangeCeiling,
					message : actual + ' is not so between ' + rangeFloor +
							" and " + rangeCeiling
				};

				if (!result.pass) {
					console.log("Compare called: ", actual);
					result.message = actual + ' is not at all between ' +
							rangeFloor + " and " + rangeCeiling;
				}

				return result;
			}
		};
	}
};

describe("Test Custom Matcher called toBeBetween", function() {
	'use strict';

	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
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

	it("6 is between 5 and 30", function() {
		expect(6).toBeBetween(5, 30);
	});

	it("3 is between 5 and 30", function() {
		expect(3).not.toBeBetween(5, 30);
	});

});

describe("custom equality", function() {
	'use strict';

	var myCustomEquality = function(first, second) {

		if (typeof first == "string" && typeof second == "string") {
			return first[0] == second[1];
		}

	};

	beforeEach(function() {
		jasmine.addCustomEqualityTester(myCustomEquality);
	});

	it("should be custom equal", function() {
		expect("abc").toEqual("aaa");
	});

	it("should be custom not equal", function() {
		expect("abc").not.toEqual("abc");
	});
});

var customMatchers2 = {
	toBeGoofy : function(util, customEqualityTesters) {
		'use strict';

		return {

			compare : function(actual, expected) {

				if (expected === undefined) {
					expected = '';
				}

				var result = {};

				result.pass = util.equals(actual.hyuk, "gawrsh" + expected,
						customEqualityTesters);

				if (result.pass) {

					result.message = "Expected " + actual +
							" not to be quite so goofy";
				} else {

					result.message = "Expected " + actual +
							" to be goofy, but it was not very goofy";
				}

				return result;
			}
		};
	}
};

describe("Custom matcher: 'toBeGoofy'", function() {
	'use strict';

	beforeEach(function() {
		jasmine.addMatchers(customMatchers2);
	});

	it("is available on an expectation", function() {
		expect({
			hyuk : 'gawrsh'
		}).toBeGoofy();
	});

	it("can take an 'expected' parameter", function() {
		expect({
			hyuk : 'gawrsh is fun'
		}).toBeGoofy(' is fun');
	});

	it("can be negated", function() {
		expect({
			hyuk : 'this is fun'
		}).not.toBeGoofy();
	});
});