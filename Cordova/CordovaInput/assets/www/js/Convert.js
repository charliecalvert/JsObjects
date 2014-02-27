/**
 * @author Charlie Calvert
 */

function Convert() { 
    
     Convert.prototype.toFarenheit = function(userInput) {'use strict';    
        userInput = (userInput - 32) * 5 / 9;
        return userInput.toFixed(2);               
    };

    Convert.prototype.toMiles = function(userInput) {'use strict';
        userInput = userInput * 1.609344;        
        return userInput.toFixed(2);        
    };

    Convert.prototype.calculateSquareRoot = function(userInput) {'use strict';
        userInput = Math.sqrt(userInput);
        return userInput.toFixed(2);                
    };
};

