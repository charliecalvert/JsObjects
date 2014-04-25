/**
 * @author Charlie Calvert
 */

ELF.own.BasePerson = (function() {
	'use strict';
	
	var datas = [];
    function BasePerson() {
    	datas.push(new Elf.own.Data01({ bar: 1 }));    	
    	datas.push(new Elf.own.Data01({ bar: 2 }));
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
    };

	

    return BasePerson;
})();

$(document).ready(function() {"use strict";

	// Subclass using module pattern
	var basePerson = new BasePerson();
});

