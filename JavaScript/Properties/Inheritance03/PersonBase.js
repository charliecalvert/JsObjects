/**
 * @author Charlie Calvert
 */

var BasePerson = (function() {
	'use strict';
	
    function BasePerson() {
    }

    BasePerson.prototype.withValue = function(value) {
        var d = this.withValue.d || (this.withValue.d = {
            enumerable : false,
            writable : true,
            configurable : true,
            value : null
        });

        d.value = value;
        return d;
    };

    return BasePerson;
})();
