/**
 * New node file
 */

define(function(require) {

	var utilities = {

		errorHandler : function(fx, status, error) {
			$('#debug01').html(fx.responseText);
			$('#debug02').html('error' + error);
		},

		isTruthy : function(value) {
			if (value === false) {
				return value;
			} else if (value === null) {
				return false;
			} else if (typeof value === 'undefined') {
				return false
			} else {
				return true;
			}
		},

		isFalsy : function(value) {
			return this.isTruthy(value) ? false : true;
		}
	}

	return utilities;
	
});