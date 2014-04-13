
describe("An Array Suite", function() { 'use strict';

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  
  it("Can create ArrayAll", function() {
	 var arrayAll = app.init();
	 expect(arrayAll).not.toBeNull();
  });
  
});
