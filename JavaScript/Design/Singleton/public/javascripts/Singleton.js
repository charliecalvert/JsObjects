/**
 * @author Charlie Calvert
 */

define(function() {

// From: http://code.google.com/p/jslibs/wiki/JavascriptTips#Singleton_pattern

var isTruthy = function(value) {
	if (typeof value === 'undefined') {
		return false
	} else if (value === false) {
		return value;
	} else if (value === null) {
		return false;
	} else {
		return true;
	}
};

function MySingletonClass() {'use strict';

    if (!isTruthy(this._instance)) {
    	return this;
    }

    this._instance = this;
    
    this.foo = function() {
        // ...
    };

    this.display = function(value) {
        $('#debug01').append('<li>' + value + '</li>');
    };
}

MySingletonClass.prototype.shared = 35;

return MySingletonClass;

});