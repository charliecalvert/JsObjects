// specs code
describe("calculator", function() {
    'use strict';

    it("Sum two values", function() {
        expect(calculator.sum(1, 2)).toEqual(3);
    });

    it("Multiple two values", function() {
        expect(calculator.multiply(2, 3)).toEqual(6);
    });

    it("Subtract two values", function() {
        expect(calculator.subtract(2, 3)).toEqual(-1);
    });

});

