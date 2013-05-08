/**
 * @author Charlie Calvert
 */

var BasePerson = (function() {

    function BasePerson() {
    }

    BasePerson.prototype.getSet = function(init) {
    	var value = init;
        return {
        	set: function(newValue) { value = newValue; },
        	get: function() { return value; },
            enumerable : false,
            configurable : true,
        };
    }

    return BasePerson;
})();
