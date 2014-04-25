/**
 * @author Charlie Calvert
 */

 function myTests() {
	 'use strict';
 	test('TestConstructor', function() {
 		var subClass = new SubClass('Sue', 'Hill');
 		ok(typeof subClass === 'object', 'typeof subClass = ' + typeof subClass);
 	});
 	
 	test('TestConstructorName', function() {
 		var subClass = new SubClass('Sue', 'Hill');
 		var expected = 'BasePerson';
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
 	
 	test('UniqueNames', function() {
 		var instance01 = new SubClass('Sam', 'Hill');
 		var instance02 = new SubClass('Lucy', 'Lu');
 		var expected01 = 'Sam';
 		var expected02 = 'Lu';
 		equal(instance01.firstName, expected01, 'Instance01 = ' + instance01.getName()); 
 		equal(instance02.lastName, expected02, 'Instance02 = ' + instance02.getName());
 	});
 }
 
 $(document).ready(function() {
	 'use strict';
 	myTests();
 });