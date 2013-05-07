/**
 * @author Charlie Calvert
 */

var BasePerson = (function() {

    function BasePerson() {
    }

    BasePerson.prototype.getSet = function(init) {
    	var value = init;
        return {
        	set: function() { value = init; },
        	get: function() { return value; },
            enumerable : false,
            configurable : true,
        };
    }

    return BasePerson;
})();
