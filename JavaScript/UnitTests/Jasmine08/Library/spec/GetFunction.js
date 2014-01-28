/**
 * @author Charlie Calvert
 */

define('functionObject', function() { 'use strict';

	return function() {

		var a = 1;

		this.getA = function() {
			return a;
		};
	};
	
	
}); 