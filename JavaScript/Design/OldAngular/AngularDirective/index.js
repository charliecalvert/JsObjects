/**
 * @author Charlie Calvert
 */

var app = angular.module('ElvenApp', []);

app.controller("Picture", function() {
	this.src="IMG_6405.JPG";	
});

app.directive('showpicture', function() { 'use strict';
	return {
		link: function(scope, element, attributes) {
			scope.$watch(attributes.showpicture, function(value) {				
				element.css('display', value ? '' : 'none');		
			});
		}
	};
});