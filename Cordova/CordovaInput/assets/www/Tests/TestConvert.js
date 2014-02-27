/**
 * @author Charlie Calvert
 */

describe("Test Convert", function() {
    
    var convert = CordovaInput.Convert;    
    
    it("shows that toMiles(1) yields 1.61", function() {
       var expected = "1.61";
       var actual = convert.toMiles(1) ;
       expect(actual).toBe(expected); 
    });
    
    it("shows that toFarenheit(69.8) yields 21.00", function() {
       var actual = convert.toFarenheit(69.8);
       var expected = "21.00";
       expect(actual).toBe(expected); 
    });
    
    it("shows that calculateSquareRoot(625) yields 25", function() {
       var actual = convert.calculateSquareRoot(625);
       var expected = "25.00";
       expect(actual).toBe(expected); 
    });
});
