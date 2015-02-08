/**
 * Created by charliecalvert on 2/8/15.
 */

elf.NumberModule = (function() {

    'use strict';

    var five;

    function NumberModule() {
        five = 5;
    }

    NumberModule.prototype.getThree = function() {
        return 3;
    };

    NumberModule.prototype.getFour = function() {
        return 4;
    };

    NumberModule.prototype.getFive = function() {
        return five;
    };

    return NumberModule;

}());