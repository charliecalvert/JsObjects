/**
 * @author Charlie Calvert
 */

var App = (function() {

	function App(firstName, lastName, middleName) {
		var middleName = middleName;
		
		var setProperty = function(subclass, propName, initValue) {	
	 		Object.defineProperty(subclass, propName, { 
	 			value : initValue,
	 			configurable: true,
	 			writable: true });
        };
        
        var setPropertyFunc = function(subclass, propName, setFunc, getFunc) {	
	 		Object.defineProperty(subclass, propName, {
	        	set: setFunc,
	        	get: getFunc,
	            enumerable : false,
	            configurable : true
	        });
        };
        
        //SubClass.prototype = new BasePerson();
		var setMiddleName = function(newValue) {
			middleName = newValue;
		}
		
		var getMiddleName = function() {
			return middleName;
		}
        
        setProperty(this, 'firstName', firstName);
		setProperty(this, 'lastName', lastName);
		setPropertyFunc(this, 'middleName', setMiddleName, getMiddleName);
	}

	
	
	App.prototype.sayName = function(selector) {
		$(selector).html("Name inside object: " + this.firstName + ' ' + this.lastName);
	}

	App.prototype.getName = function() {
		if (this.middleName !== null) {
			return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
		} else {
			return this.firstName + ' ' + this.lastName;
		}
	}

	return App;
})();

$(document).ready(function() {"use strict";

	// Subclass using module pattern
	var subClass = new App('Sarah', 'Winnemucca');
	subClass.sayName("#name01");
	$("#name02").html("Name outside object: " + subClass.firstName + ' ' + subClass.lastName);
	subClass.firstName = "Harriet";
	subClass.lastName = "Tubman";
	subClass.middleName = 'Goober';
	$("#name03").html("Modified Name: " + subClass.firstName + ' ' + subClass.lastName);
	var instance2 = new App('Abraham', 'Lincoln');
	$("#name04").html("Instance2 Name: " + instance2.firstName + ' ' + instance2.lastName);
	$("#name05").html("Original object's name is unchanged: " + subClass.firstName + ' ' + subClass.lastName);
});
