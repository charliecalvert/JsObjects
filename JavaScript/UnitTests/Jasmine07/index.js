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

(function() {
    'use strict';
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var reporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(reporter);

    jasmineEnv.specFilter = function(spec) {
        return reporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();
