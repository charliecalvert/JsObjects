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

        setProperty(this, 'firstName', firstName);
        setProperty(this, 'lastName', lastName);
    }

    //SubClass.prototype = new BasePerson();

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
    $("#name03").html("Modified Name: " + subClass.firstName + ' ' + subClass.lastName);
    var instance2 = new SubClass('Abraham', 'Lincoln');
    $("#name04").html("Instance2 Name: " + instance2.firstName + ' ' + instance2.lastName);
    $("#name05").html("Original object's name is unchanged: " + subClass.firstName + ' ' + subClass.lastName);
});
