ELF.Utilities = (function() {
	'use strict';
	function Utilities() {

	}

	var isEmptyString = function(value) {
		return ((!value) || (value === "") );
	};

	Utilities.prototype.readyForUpdate = function(firstName, lastName) {
		var failure = isEmptyString(firstName) || isEmptyString(lastName);
		return !failure;
	};

	Utilities.prototype.deleteFromArray = function(array, value) {
		var index = array.indexOf(value);
		array.splice(index, 1);
	};

	Utilities.prototype.deleteFromArray2 = function(array, value) {
		var len = array.length - 1;
		while (len > 0) {
			pres = array[len--];
			if (pres.itemName === value) {
				array.splice(len + 1, 1);
				return;
			}
		}
	};

	return Utilities;
})();