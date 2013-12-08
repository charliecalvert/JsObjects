/**
 * @author Charlie Calvert
 */

angular.module('tools', [])
.factory('boat', function() {  'use strict';
	return {
		description : "I'm a boat."
	};
})
.factory('sailboat', function() {  'use strict';
    return {
        description: "I'm a sailboat",
        
        getNine: function() {
            return 9;
        }       
    };
});

