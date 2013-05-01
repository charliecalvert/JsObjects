/**
 * @author Charlie
 */

var BaseObject = (function() {
    function BaseObject() {
    }
    
    BaseObject.prototype.sayName = function(selector) {
  		$(selector).html("I'm the: " + this.constructor.name);  
    };
    
    return BaseObject;   
})();

var SubClass02 = (function() {
	function SubClass02() {		
	}
	
	SubClass02.prototype = new BaseObject();
	
	SubClass02.prototype.sayName = function(selector) {
		$(selector).html("In sayName1 I'm the: " + this.constructor.name);
	}
	
	return SubClass02;
})();

$(document).ready(function() {
  "use strict"; 
  
  // Exercise base object
  var baseObject = new BaseObject();
  baseObject.sayName("#test01");
  
  // Declare subclass of BaseObject
  function SubClass01() {};
  SubClass01.prototype = new BaseObject();
  
  // Instantiate subclass and exercise it
  var subClass01 = new SubClass01();  
  subClass01.sayName("#test02");
  
  // Subclass using module pattern
  var subClass02 = new SubClass02();
  subClass02.sayName("#test03");
});