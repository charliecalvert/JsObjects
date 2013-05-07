/**
 * @author Charlie Calvert
 */

var SubClass = (function() {
	
	function SubClass(firstName, lastName) {		
       	Object.defineProperty(this, 'firstName', this.withValue(firstName));
       	Object.defineProperty(this, 'lastName', this.withValue(lastName));
	}
		
	SubClass.prototype = new BasePerson();
	
    SubClass.prototype.sayName = function(selector) {
		$(selector).html("Name inside object: " + this.firstName + ' ' + this.lastName);
	} 
	
	return SubClass;
})();

$(document).ready(function() {
  "use strict"; 
  
  // Subclass using module pattern
  var subClass = new SubClass('Sarah', 'Winnemucca');
  subClass.sayName("#name01");
  $("#name02").html("Name outside object: " + subClass.firstName + ' ' + subClass.lastName);
  subClass.firstName = "Harriet";
  subClass.lastName = "Tubman";
  $("#name03").html("Modified Name: " + subClass.firstName + ' ' + subClass.lastName);
  
  
});