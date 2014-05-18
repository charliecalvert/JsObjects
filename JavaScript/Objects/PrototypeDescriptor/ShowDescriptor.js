/**
 * @author Charlie Calvert
 */

var elf = {};

elf.ShowPrototype = ( function() {'use strict';

        function ShowPrototype() {

        }


        ShowPrototype.prototype.display = function(value, listItemId) {
            var listItem = '<li>';
            if (listItemId) {
                listItem = '<li id=' + listItemId + '>';
            }
            console.log(value);
            $("#debug").append(listItem + value + '</li>');
        };

        ShowPrototype.prototype.drawLine = function(value, red) {
            this.display("===\\/ <strong>" + value + "</strong> \\/===", red);
        };

        ShowPrototype.prototype.showPrototype = function(object) {
            var prototypeA = Object.getPrototypeOf(object);
            for (var prop in prototypeA) {
                this.display(prop);
            }
            var keysA = Object.keys(prototypeA);
            for (var key in keysA.__proto__) {
                this.display(key);
            }
            var descriptor = Object.getOwnPropertyDescriptor(object, prototypeA);
            if ( typeof descriptor === 'undefined') {
                this.display(object.prototype);
            } else {
                var description = JSON.stringify(descriptor);
                this.display("<strong>Descriptor:</strong>: " + description);
                for (var property in description) {
                    this.display(property);
                }
            }
        };

        ShowPrototype.prototype.showKeys = function(object) {
            var keys = Object.keys(object);
            this.display("<strong>Keys</strong>: " + keys);
            for (var i = 0; i < keys.length; i++) {
                this.drawLine("New Key", 'greenback');
                var propName = keys[i];
                this.display('<strong>Property</strong>: ' + propName);
                if ( typeof (object[propName]) == "function") {
                    this.display('<strong>Type</strong>: ' + "Function");
                } else {
                    this.display('<strong>Value</strong>: ' + object[propName]);
                }
                //elf.utilities.getPropertyDescriptor(object, propName);
                // elf.utilities.getPropertyIsEnumerable(object, propName);
            }
        };

        return ShowPrototype;
    }());
