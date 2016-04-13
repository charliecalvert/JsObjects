/**
 * @author Charlie Calvert
 */

angular.module('sailboat', [])
.factory('sailboat', function() { 'use strict';
	return {
		description: "I'm a sailboat.",
		
		getNine: function() {
			return 9;
		}		
	};
});



