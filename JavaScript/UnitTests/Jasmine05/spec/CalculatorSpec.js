

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
  
  it("converts 9 feet to 3 yards", function() {
  	var actual = xConvert(9, 'feet').to('yards');  	
  	expect(actual).toEqual(3);
  });
  
  it("converts 6 feet to 2 yards", function() {
  	var obj = xConvert(6, 'feet');
  	var actual = obj.to('yards');  	
  	expect(actual).toEqual(2);
  });
  
  it("converts 24 inches to 2 feet", function() {
  	var actual = xConvert(24, 'inches').to('feet');  	
  	expect(actual).toEqual(2);
  });
  
  it("converts 4 gallons to 15.14 liters", function() {
  	var actual = xConvert(4, 'gallons').to('liters');  	
  	expect(actual).toEqual(15.14);
  });
});