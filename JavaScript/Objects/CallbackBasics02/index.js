/**
 * @author Charlie
 */

var Converter = (function() {
    'use strict';
    
    // Private variable
    var x = 0;
    
    // Constructor
    function Converter(initX) {
        x = initX;
    }
    
    // Private method
    function square(value) {
        return value * value;        
    }
    
    // Public methods
    Converter.prototype.convert = function(func) {
        var result = square(x);
        return func(result);      
    };
    
    return Converter;
})();



$(document).ready(function() {"use strict";

    var converter = new Converter(2);
    
    var feet = converter.convert(function(miles) {
        return miles * 5280;
    });
    
    var yards = converter.convert(function(miles) {
        return miles * (5280 / 3);
    });

    $("#feet").html(feet);
    $("#yards").html(yards);
}); 