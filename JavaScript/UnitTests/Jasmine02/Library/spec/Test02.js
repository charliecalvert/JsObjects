// var getEight = require('./getEight');

define('Test02', ['getEight'], function(getEight) { 
	describe("Elvenware Get Number Suite", function() {
		// what is being tested
	    function getNine() {
	        return 9;
	    }
		
		it("Call local getNine", function() {
			expect(getNine()).toBe(9);
		});
		
		it("Call module that returns 8", function() {
			expect(getEight.getEight()).toBe(8);
		});
		
		it("Calls a module that returns 7", function() {
			expect(getEight.getSeven()).toBe(7);
		});
	});
});