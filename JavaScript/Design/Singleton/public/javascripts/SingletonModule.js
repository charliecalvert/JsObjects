/**
 * @author Charlie Calvert
 */

define(function() {

	var elf = {};

	elf.SingletonModule = (function() {
		'use strict';

		var _instance;
		var that;

		function SingletonModule() {
			that = this;

			if (_instance == null) {
				_instance = this;
			} else {
				return _instance;
			}
		}

		SingletonModule.prototype.publicMethod = function() {
			return "I'm the SingletonModule.publicMethod.";
		};

		SingletonModule.prototype.display = function(value) {
			$('#debug02').append('<li>' + value + '</li>');
		};
	
		return SingletonModule;

	}());

	return elf.SingletonModule;
});
