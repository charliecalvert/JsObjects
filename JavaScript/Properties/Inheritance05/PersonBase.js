/**
 * @author Charlie Calvert
 */

var BasePerson = (function() {

    function BasePerson() {
    	var that = {};
    	function getThat() { return that; }
    }
    
    var bar = function () {};
    BasePerson.prototype.getSet = function(init) {
    	var value = init;
        return {
        	set: function() { value = init; },
        	get: function() { return value; },
        	foo: bar,
            enumerable : false,
            configurable : true,
        };
    }

	/* BasePerson.prototype.setProperty = function(propName, initValue) {
    	
        Object.defineProperty(this, 'lastName', {
        	set: function() { BasePerson[propName] = initValue; },
        	get: function() { return BasePerson[propName]; },
            enumerable : false,
            configurable : true
        });
    }; */
    
    /*BasePerson.prototype.setProperty = function(propName, initValue) {
    	
        Object.defineProperty(this, 'lastName', {
        	set: function() { BasePerson.getThat()[propName] = initValue; },
        	get: function() { return BasePerson.getThat()[propName]; },
            enumerable : false,
            configurable : true
        });
    };*/

    return BasePerson;
})();
