/**
 * @author Charlie Calvert
 */

function myTests() {
    'use strict';
    test('MyFirstTest', function() {
        ok(true);
    });

    test('MySecondTest', function() {
        ok(1 === 1);
    });

    test('TestAdd', function() {
        var app = new App();
        var result = app.add(2, 3);
        var expected = 5;
        equal(result, expected);
    });

    test('TestAdd2', function() {
        var app = new App();
        var result = app.add(2, 3);
        var expected = 5;
        ok(result === expected, 'result for now: ' + result);
    });

    test('TestMultiply', function() {
        var app = new App();
        var result = app.multiply(2, 3);
        var expected = 6;
        equal(result, expected, 'result for now: ' + result);
    });
}

$(document).ready(function() {
    'use strict';
    myTests();
});
