/**
 * @author Charlie Calvert
 */

 function myTests() {
 	test('TestConstructor', function() {
 		var subClass = new SubClass('Sue', 'Hill');
 		ok(typeof subClass === 'object', 'typeof subClass = ' + typeof subClass);
 	});
 	
 	test('TestConstructorName', function() {
 		var subClass = new SubClass('Sue', 'Hill');
 		var expected = 'BasePerson'
 		equal(subClass.constructor.name, expected, 'SubClass.constructor = ' + subClass.constructor);
 	});
 	
 	test('TestFirstName', function() {
 		var firstName = 'Sue';
 		var subClass = new SubClass(firstName, 'Hill');
 		var expected = firstName;
 		equal(subClass.firstName, expected);
 	});
 	
 	test('TestLastName', function() {
 		var firstName = 'Sue';
 		var lastName = 'Hill'; 		
 		var subClass = new SubClass(firstName, lastName);
 		var expected = lastName;
 		equal(subClass.lastName, expected);
 	});
 }
 
 $(document).ready(function() {
 	myTests();
 });