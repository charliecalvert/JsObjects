/**
 * @author Charlie Calvert
 */

elf.utilities = {

    name : "utilities",

    clearList : function() {'use strict';
        $("#debug").empty();
    },

    display : function(value, listItemId) {'use strict';
        var listItem = '<li>';
        if (listItemId) {
            listItem = '<li id=' + listItemId + '>';
        }
        console.log(value);
        $("#debug").append(listItem + value + '</li>');
    },

    drawLine : function(value, red) {'use strict';
        this.display("===\\/ <strong>" + value + "</strong> \\/===", red);
    },

    getPropertyIsEnumerable : function(object, propName) {'use strict';
        var isEnumerable = object.propertyIsEnumerable(propName) ? "true" : "false";
        this.display("<strong>enumerable</strong>: " + isEnumerable);
    },

    getPropertyDescriptor : function(object, propName) {'use strict';
        var descriptor = Object.getOwnPropertyDescriptor(object, propName);
        var description = JSON.stringify(descriptor);
        this.display("<strong>Descriptor:</strong>: " + description);
    },

    showKeys : function(object) {'use strict';
        var keys = Object.keys(object);
        elf.utilities.display("<strong>Keys</strong>: " + keys);
        for (var i = 0; i < keys.length; i++) {
            this.drawLine("New Key", 'greenback');
            var propName = keys[i];
            elf.utilities.display('<strong>Property</strong>: ' + propName);
            if ( typeof (object[propName]) == "function") {
                elf.utilities.display('<strong>Type</strong>: ' + "Function");
            } else {
                elf.utilities.display('<strong>Value</strong>: ' + object[propName]);
            }
            elf.utilities.getPropertyDescriptor(object, propName);
            elf.utilities.getPropertyIsEnumerable(object, propName);
        }
    },

    showPropertyLoop : function(object) {'use strict';
        this.drawLine("Begin hasOwnProperty loop");
        this.display("<strong>Object name</strong>: " + object.name);
        this.display("<strong>Constructor name</strong>: " + object.constructor.name);
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                this.display(property);
            }
        }
    }
};
