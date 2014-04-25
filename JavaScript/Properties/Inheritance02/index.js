/**
 * @author Charlie
 */

var BaseObject = (function() {
	'use strict';
	
    function BaseObject(initHeight, y1, z1) {
    
    	// Define a public variable
       	this.z = z1;
       	
       	// Define a private backing store for use with get and set methods
       	var y = y1;       	
       	this.getY = function() { return y; };
       	
		// Define property to which you can add a backing store later    
       	Object.defineProperty(this, "height", withValue(initHeight));
       	
       	// Define a public property with a private backing store
       	var width = 4;
		Object.defineProperty(this, "width", {get: function() { return width; },
                               set: function(newValue) { width = newValue; },
                               enumerable : true,
                               configurable : true});
    }
        
    var withValue = function(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : false,
			configurable : true,
			value : null
		});
		
		d.value = value;
		return d;
	};
	
    BaseObject.prototype.sayName = function(selector) {
  		$(selector).html("I'm the: " + this.constructor.name);  
    };
    
    BaseObject.prototype.showHeight = function(selector) {
    	$(selector).html("The height property is now: " + this.height);
    };
    
    BaseObject.prototype.changeHeight = function(newHeight) {
    	this.height = newHeight;
    };
    
    return BaseObject;   
})();


$(document).ready(function() {
  "use strict"; 
  
  // Exercise base object with initial values for all our properties
  var baseObject = new BaseObject(1, 11, 111);
  baseObject.sayName("#test01");
  
  // Declare subclass of BaseObject with initial values for our propertiers
  function SubClass01() {}
  SubClass01.prototype = new BaseObject(3, 33, 333);
  
  // Instantiate subclass and exercise it
  var subClass01 = new SubClass01();  
  subClass01.sayName("#test02");
  baseObject.showHeight('#testX01');
  subClass01.showHeight('#testX02');
  $('#testX03').html('Calling GetY: ' + baseObject.getY());
  $('#testX04').html('Accessing Width Property: ' + subClass01.width);
  subClass01.width = 44;
  $('#testX05').html('Changed Width Property: ' + subClass01.width);
  
});