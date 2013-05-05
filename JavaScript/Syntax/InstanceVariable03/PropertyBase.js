/**
 * @author Charlie
 */

 var ELF = {};
 
 ELF.own.PropertyBase = (function() {
 	
 	function PropertyBase() {
 	};
 
 	PropertyBase.prototype.withValue = function(value) {
		var d = withValue.d || (withValue.d = {
			enumerable : false,
			writable : true,
			configurable : true,
			value : null
		});
		d.value = value;
		return d;
	}
	
	return PropertyBase;
 })();
 