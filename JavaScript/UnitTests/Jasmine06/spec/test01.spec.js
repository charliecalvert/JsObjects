describe("A suite", function() {
	'use strict';
	
  it("Expects True to Be True", function() {
    expect(true).toBe(true);
  });
  
  it("expects 1 + 1 = 2", function() {
    expect(1+1).toBe(2);
  });
  
  it("expects addMe(5, 6) = 11", function() {
  	expect(addMe(5, 6)).toBe(11);
  });
});