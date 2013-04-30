/**
 * @author Charlie
 */
var Point = (function() {
    'use strict';

  // Constructor
    function Point(x1, y1) {
      	this.init(x1, y1);
    }    
    
    // Private variables
  
    Point.prototype.init = function (x, y) {
		Object.defineProperty(this, "x", withValue(x));
		Object.defineProperty(this, "y", withValue(y));
	}
	
	function withValue(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : true,
			configurable : true,
			value : null
		});
		d.value = value;
		return d;
	}
    
    // Private function
    var bar = function () { return x; };

  
    
    // Public static
    Point.hiss = function() {
        return "Hiss";
    };
    
    // Public method
    Point.prototype.add = function () {
        return x + y + bar();
    };      

    return Point;
})();

window.onload = function() {
    'use strict';
    var point = new Point(3, 4);
    var point2 = new Point(5, 6);      
};