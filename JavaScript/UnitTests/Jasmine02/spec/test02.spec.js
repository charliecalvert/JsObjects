// var getEight = require('getEight');

describe("A suite", function() {
	// what is being tested
    function getNine() {
        return 9;
    }
	
	it("Call local getNine", function() {
		expect(getNine()).toBe(9);
	});
	
	it("Call module that returns 8", function() {
		expect(getEight()).toBe(8);
	});
});