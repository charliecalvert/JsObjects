function addMe(a, b) {
    return a + b;
}


describe("An Elvenware Suite of Specs", function() {
  it("shows true = true", function() {
    expect(true).toBe(true);
  });
  
  it("shows 1 + 1 = 2", function() {
    expect(1+1).toBe(2);
  });

  it("shows addMe(2, 3) = 5", function() {
    expect(addMe(2, 3)).toBe(5);
  });
  
});