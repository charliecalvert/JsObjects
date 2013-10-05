function addMe() {
    return 2 + 3;
}

function BarFoo() {
    expect(addMe()).toBe(6);
  }
  
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  
  it("contains spec with an expectation", function() {
    expect(1+1).toBe(2);
  });
  
  it("contains spec with an expectation", BarFoo() );
});