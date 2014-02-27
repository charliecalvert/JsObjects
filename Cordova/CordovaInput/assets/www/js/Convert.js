/**
 * @author Charlie Calvert
 */

CordovaInput.Convert = new function() {

	this.toFarenheit = function(userInput) {'use strict';
		userInput = (userInput - 32) * 5 / 9;
		return userInput.toFixed(2);
	};

	this.toMiles = function(userInput) {'use strict';
		userInput = userInput * 1.609344;
		return userInput.toFixed(2);
	};

	this.calculateSquareRoot = function(userInput) {'use strict';
		userInput = Math.sqrt(userInput);
		return userInput.toFixed(2);
	};
};

