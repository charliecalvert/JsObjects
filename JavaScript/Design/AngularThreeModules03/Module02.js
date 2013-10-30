/**
 * @author Charlie Calvert
 */

angular.module('tools', [])
.factory('boat', function() {
	return {
		description : "I'm a boat."
	};
})
.factory('sailboat', function() {
    return {
        description: "I'm a sailboat",
        
        getNine: function() {
            return 9;
        }       
    };
});

