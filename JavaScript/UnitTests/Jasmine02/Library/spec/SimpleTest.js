/**
 * @author charlie
 */


define('SimpleTest', [], function(getEight) { 
	'use strict';
	
	describe("Elvenware Simple Suite", function() {
		it("expects true to be true", function() {
			expect(true).toBe(true);
		});
		
		it("expects seven to be seven", function() {
			expect(7).toBe(7);
		});
	});
});