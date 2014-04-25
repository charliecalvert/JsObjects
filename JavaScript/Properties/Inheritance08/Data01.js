/**
 * @author Charlie Calvert
 */

var ELF = {};

ELF.own = {};

ELF.own.Data01 = (function() {
    'use strict';

    function Data01(dataInit) {
        var that = dataInit;

        var setProperty = function(subclass, propName, initValue) {
            that[propName] = initValue;
            Object.defineProperty(subclass, propName, {
                set: function(newValue) {
                    that[propName] = newValue;
                },
                get: function() {
                    return that[propName];
                },
                enumerable: false,
                configurable: true
            });
        };

        var setProperty02 = function(subclass, propName, initValue, setFunc) {
            that[propName] = initValue;
            Object.defineProperty(subclass, propName, {
                set: setFunc,
                get: function() {
                    return that[propName];
                },
                enumerable: false,
                configurable: true
            });
        };

        setProperty(this, 'firstName', firstName);
        setProperty(this, 'lastName', lastName);
        setProperty02(this, 'middleName', lastName, setFunc);
    }

    //SubClass.prototype = new BasePerson();
    var setFunc = function(newValue) {
        return '3';
    };

    Data01.prototype.sayName = function(selector) {
        $(selector).html("Name inside object: " + this.firstName + ' ' + this.lastName);
    };

    Data01.prototype.getName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    return Data01;
})();
