/**
 * @author Charlie
 */

describe('Test Greet Timeout', function() {
    'use strict';
    var greet, $timeout, $log;

    beforeEach(module('async'));

    beforeEach(inject(function(_greet_, _$timeout_, _$log_) {
        greet = _greet_;
        $timeout = _$timeout_;
        $log = _$log_;
    }));

    it('Should greet', function() {
        greet.say('World!', 999999);
        $timeout.flush();

        expect($log.info.logs).toContain(['Hello World!']);
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
