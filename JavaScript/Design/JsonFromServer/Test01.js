/**
 * @author Charlie
 */

describe("mycontrollertest", function() {'use strict';
    var $mockScope = null;
    var pc = null;

    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('MyController', { $scope: $mockScope }); 
    }));

    it("Test hint", function() {
        expect($mockScope.hint).toEqual("Enter a number of miles");
    });
    
    it("TestMilesToFeetForOneMile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(5280);
    });
    
    it("TestMilesToFeetFor2Miles", function() {
        $mockScope.miles = 2;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(10560);
    });
    
    it("TestMilesToFeetForDefault", function() {
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(0);
    });
});

(function() {'use strict';
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