/**
 * @author Charlie Calvert
 */

/*jshint devel: true, browser: true, jquery: true, strict: true */

var App = {};

App.Utility = (function() {'use strict';

    function Utility() {}
    
    Utility.prototype.zeroFill = function(number, width) {
        console.log("debug: zeroFill called");
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
        // always return a string
    };

    Utility.prototype.getToday = function() {
        console.log("debug: getToday called");
        var today = new Date();
        var day = today.getDate();        
        
        var month = today.getMonth() + 1;        
        var year = today.getFullYear();
        day = this.zeroFill(day, 2);
        month = this.zeroFill(month, 2);
        
        return month + '/' + day + '/' + year;
    };
    
    return Utility;    
})();
