/**
 * @author Charlie Calvert
 */

var SubClass = (function() {
    'use strict';

    function SubClass(firstName, lastName) {
        var that = {};

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

        //SubClass.prototype = new BasePerson();
        var setFunc = function(newValue) {
            that.middleName = newValue;
        };

        setProperty(this, 'firstName', firstName);
        setProperty(this, 'lastName', lastName);
        setProperty02(this, 'middleName', lastName, setFunc);


    }



    SubClass.prototype.sayName = function(selector) {
        $(selector).html("Name inside object: " + this.firstName + ' ' + this.lastName);
    };

    SubClass.prototype.getName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    return SubClass;
})();

$(document).ready(function() {
    "use strict";

    // Subclass using module pattern
    var subClass = new SubClass('Sarah', 'Winnemucca');
    subClass.sayName("#name01");
    $("#name02").html("Name outside object: " + subClass.firstName + ' ' + subClass.lastName);
    subClass.firstName = "Harriet";
    subClass.lastName = "Tubman";
    subClass.middleName = 'Goober';
    $("#name03").html("Modified Name: " + subClass.firstName + ' ' + subClass.lastName);
    var instance2 = new SubClass('Abraham', 'Lincoln');
    $("#name04").html("Instance2 Name: " + instance2.firstName + ' ' + instance2.lastName);
    $("#name05").html("Original object's name is unchanged: " + subClass.firstName + ' ' + subClass.lastName);
});
