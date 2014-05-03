/**
 * @author Charlie Calvert
 */

elf.utilities = {

    name : "utilities",

    clearList : function() {
        $("#debug").empty();
    },

    display : function(value, listItemId) {
        var listItem = '<li>';
        if (listItemId) {
            listItem = '<li id=' + listItemId + '>';
        }
        console.log(value);
        $("#debug").append(listItem + value + '</li>');
    },

    drawLine : function(value, red) {
        this.display("===\\/ <strong>" + value + "</strong> \\/===", red);
    },

    getPropertyIsEnumerable : function(object, propName) {
        var isEnumerable = object.propertyIsEnumerable(propName) ? "true" : "false";
        this.display("<strong>enumerable</strong>: " + isEnumerable);
    },

    getPropertyDescriptor : function(object, propName) {
        var descriptor = Object.getOwnPropertyDescriptor(object, propName);
        var description = JSON.stringify(descriptor);
        this.display("<strong>Descriptor:</strong>: " + description);
    },

    showKeys : function(object) {
        var keys = Object.keys(object);
        elf.utilities.display("<strong>Keys:</strong>: " + keys);
        for (var i = 0; i < keys.length; i++) {
            this.drawLine("New Key", 'greenback');
            var propName = keys[i];
            elf.utilities.display('<strong>Property</strong>: ' + propName);
            elf.utilities.getPropertyDescriptor(object, propName);
            elf.utilities.getPropertyIsEnumerable(object, propName);
        }
    },

    showPropertyLoop : function(object) {
        this.drawLine("Begin hasOwnProperty loop");
        this.display("<strong>Object name</strong>: " + object.name);
        this.display("<strong>Constructor name</strong>: " + object.constructor.name);
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                this.display(property);
            }
        };
    }
};
