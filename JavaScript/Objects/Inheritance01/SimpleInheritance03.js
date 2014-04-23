/**
 * @author Charlie Calvert
 */

var ElfModular = {
	baseObject: null,
	subClass02: null,
	
	init: function() {'use strict';
		this.baseObject = new ElfModular.BaseObject();
		this.subClass02 = new ElfModular.SubClass02();	
	}
};

ElfModular.BaseObject = (function() {
    'use strict';
    var name = "BaseObject";
    
    function BaseObject() {
    }
    
    BaseObject.prototype.sayName = function(selector, listSelector) {
  		$(selector).html("In BaseObject sayName");
  		$(listSelector).append("<li> constructor name = " + this.constructor.name + "</li>");
  		$(listSelector).append("<li> BaseObject name = " + name + "</li>");  
    };
    
    return BaseObject;   
})();

ElfModular.SubClass02 = (function() {
	'use strict';
	
	var name = "SubClass02";
	
	function SubClass02() {		
	}
	
	SubClass02.prototype = new ElfModular.BaseObject();
	
    SubClass02.prototype.sayName = function(selector, listSelector) {
		$(selector).html("In modular Subclass02 sayName");
		$(listSelector).append("<li> constructor name = " + this.constructor.name + "</li>");
  		$(listSelector).append("<li> Subclass02.name = " + name + "</li>");
	}; 
	
	return SubClass02;
})();

$(document).ready(function() {
  "use strict"; 
  
  // Exercise base object
  ElfModular.init();
  ElfModular.baseObject.sayName("#test01c", "#list01c");
  
  // Declare subclass of BaseObject
  function SubClass01() {}
  SubClass01.prototype = new ElfModular.BaseObject();
  var subClass01 = new SubClass01();
  subClass01.sayName("#test02c", "#list02c");
  
  // Instantiate subclass and exercise it
  // Subclass using module pattern  
  ElfModular.subClass02.sayName("#test03c", "#list03c");
});