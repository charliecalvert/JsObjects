var MyObject = (function() { 
	   
    var myProperty01 = 0;
   
   	function MyObject(value01, value02) {
   		myProperty01 = value01;
   		Object.defineProperty(this, "key", {
  			__proto__: null, // no inheritance 
  			value: value02  
		});
   		
   	}
	
   	MyObject.prototype.getMyProperty = function() {
   		return myProperty01;		 
	};
   	
   	return MyObject;                   
})();

$(document).ready(function() {
	var instance01 = new MyObject(1, 11);
	var instance02 = new MyObject(2, 22);
	$('#test01').html(instance01.getMyProperty());
	$('#test02').html(instance02.getMyProperty());
	$('#test03').html(instance01.key);
	$('#test04').html(instance02.key);
});
