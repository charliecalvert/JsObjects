var getEight = require('getEight');

describe("A suite", function() {
	// what is being tested
    function getNine() {
        return 9;
    }
	
	it("contains spec with an expectation", function() {
		expect(getNine()).toBe(9);
	});
});