/**
 * @author charles.calvert
 */

function square(a) {
    'use strict';
    return a * a;
}

test("Test01", function() {
    'use strict';
    ok(true, true);
});

test("TestSquare", function() {
    'use strict';
    var expected = 25;
    var actual = square(5);
    equal(actual, expected, "We expected to get: " + expected);
});

test("TestMultiply", function() {
    'use strict';
    var expected = 24;
    var actual = multiply(3, 8);
    equal(actual, expected);
});

test("TestAdd", function() {
    'use strict';
    var expected = 11;
    var actual = add(3, 8);
    equal(actual, expected);
});

test("TestSubtract", function() {
    'use strict';
    var expected = -5;
    var actual = subtract(3, 8);
    equal(actual, expected);
});
