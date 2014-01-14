/**
 * @author Charlie Calvert
 */

function myTests() {
	test('MyFirstTest', function() {
		ok(true);
	});
	
	test('MySecondTest', function() {
		ok(1 === 1);
	});
}
 
 $(document).ready(function() {
 	myTests();	
 });