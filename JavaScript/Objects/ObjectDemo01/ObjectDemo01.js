var myObject = {
    myProperty01 : 12,
    myProperty02 : 4,
    addProperties : function() {'use strict';
        return this.myProperty01 + this.myProperty02;
    },
    multiplyProperties : function() {'use strict';
        return this.myProperty01 * this.myProperty02;
    }
};

var display = function(value) {
    console.log(value);
    $("#debug").append('<li>' + value + '</li>');
};

var getPropertyIsEnumerable = function(propName) {
    var isEnumerable = myObject.propertyIsEnumerable(propName) ? "true" : "false";
    display("enumerable: " + isEnumerable);
};

var getPropertyDescriptor = function(propName) {
    var descriptor = Object.getOwnPropertyDescriptor(myObject, propName);
    var description = JSON.stringify(descriptor);
    display(description);
};

$(document).ready(function() {
    display(myObject.multiplyProperties());
    var keys = Object.keys(myObject);
    for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        display(propName);
        getPropertyDescriptor(propName);
        getPropertyIsEnumerable(propName);
    }
});
