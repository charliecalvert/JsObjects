function addMe() {
    return 2 + 3;
}

function multiplyMe(a, b) {
	return a * b;
}

  
describe("Elvenware Jasmine Three suite", function() {
  it("Confirm that true is true", function() {
    expect(true).toBe(true);
  });
  
  it("One plus one equals two", function() {
    expect(1+1).toBe(2);
  });
  
  it("Call addMe() with 2 + 3 = 5", function() {
    expect(addMe()).toBe(5);
  });
  
  it("Call multiplyMe() with 2 * 3 = 6", function() {
    expect(multiplyMe(2, 3)).toBe(6);
  });
  
});