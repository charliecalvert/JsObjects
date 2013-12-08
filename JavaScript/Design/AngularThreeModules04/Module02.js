/**
 * @author Charlie Calvert
 */

angular.module('tools', [])
.factory('boat', function() {  'use strict';
	this.Boat = (function() {
		var description = "I'm a boat.";

		function Boat() {

		}

		Boat.prototype.getDescription = function() {
			return description;
		};

		return Boat;
	})();

	return new this.Boat();
})
.factory('sailboat', function() { 'use strict';
	this.SailBoat = (function() {
		var description = "I'm a sailboat";

		function SailBoat() {

		}

		SailBoat.prototype.getNine = function() {
			return 9;
		};

		SailBoat.prototype.getDescription = function() {
			return description;
		};

		return SailBoat;
	})();

	return new this.SailBoat();
});

