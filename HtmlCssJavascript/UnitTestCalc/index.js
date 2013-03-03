/**
 * @author charles.calvert
 */

function square(a) {
	return a * a;
}

test("Test01", function() {
	ok(true, true);
});

test("TestSquare", function() {
	var expected = 25;
	var actual = square(5);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestMultiply", function() {
	var expected = 24;
	var actual = multiply(3, 8);
	equal(actual, expected);
});

test("TestAdd", function() {
	var expected = 11;
	var actual = add(3, 8);
	equal(actual, expected);
});

test("TestSubtract", function() {
	var expected = -5;
	var actual = subtract(3, 8);
	equal(actual, expected);
});

