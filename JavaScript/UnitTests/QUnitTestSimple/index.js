/**
 * @author Charlie Calvert
 */

function myTests() {'use strict';
	test('MyFirstTest', function() {
		ok(true);
	});
	
	test('MySecondTest', function() {
		ok(1 === 1);
	});
}
 
 $(document).ready(function() {
 	'use strict';
 	myTests();	
 });