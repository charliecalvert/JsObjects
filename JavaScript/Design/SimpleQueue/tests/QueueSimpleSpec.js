/**
 * @author Charlie Calvert
 */

describe("A Queue Simple Suite", function() {
	'use strict';

	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});

	it("Tests simple query", function() {
		var value = simpleQueue.shift();
		expect(value).toBe("Alpha");
		console.log(value); // displays 2
	});

});
