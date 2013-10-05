function addMe() {
    return 2 + 3;
}


  
describe("A suite", function() {
  it("Confirm that true is true", function() {
    expect(true).toBe(true);
  });
  
  it("One plus one equals two", function() {
    expect(1+1).toBe(2);
  });
  
  it("Call addme() with 2 + 3 = 5", function() {
    expect(addMe()).toBe(5);
  });
});