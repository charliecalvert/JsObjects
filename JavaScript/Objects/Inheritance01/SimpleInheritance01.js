/**
 * @author Charlie Calvert
 */

/*
 * BaseObject
 */

BaseObject = function() {
    'use strict';

    var name = "BaseObject";

    BaseObject.prototype.sayName = function(selector, listSelector) {
        $(selector).html("In BaseObject.sayName");        
        $(listSelector).append("<li> BaseObject.name = " + name + "</li>");
    };
};

/*
 * SubClass02
 */

SubClass02 = function() {
    'use strict';
    this.name = "SubClass02";
};

SubClass02.prototype = new BaseObject();

SubClass02.prototype.sayName = function(selector, listSelector) {
    'use strict';
    $(selector).html("In SubClass02.sayName1");    
    $(listSelector).append("<li> Subclass02.name = " + this.name + "</li>");
};

$(document).ready(function() {
    "use strict";

    // Exercise base object
    var baseObject = new BaseObject();
    baseObject.sayName("#test01a", '#list01a');

    // Declare subclass of BaseObject
    function SubClass01() {}
    SubClass01.prototype = new BaseObject();
    var subClass01 = new SubClass01();
    subClass01.sayName("#test02a", '#list02a');

    // Exercise Subclass02
    var subClass02 = new SubClass02();
    subClass02.sayName("#test03a", '#list03a');
});
