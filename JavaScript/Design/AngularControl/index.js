/**
 * @author Charlie Calvert
 */

var app = angular.module('ElvenApp', []);

app.directive('show', function() {
	return {
		link: function(scope, element, attributes) {
			scope.$watch(attributes.show, function(value) {				
				element.css('display', value ? '' : 'none');		
			});
		}
	};
});