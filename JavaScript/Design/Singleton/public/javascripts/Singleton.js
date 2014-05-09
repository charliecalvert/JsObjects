/**
 * @author Charlie Calvert
 */

// From: http://code.google.com/p/jslibs/wiki/JavascriptTips#Singleton_pattern

function MySingletonClass() {'use strict';

    if (arguments.callee._singletonInstance) {
        return arguments.callee._singletonInstance;
    }

    arguments.callee._singletonInstance = this;

    this.foo = function() {
        // ...
    };

    this.display = function(value) {
        $('#debug01').append('<li>' + value + '</li>');
    };
}

MySingletonClass.prototype.shared = 35;

$(document).ready(function() { 'use strict';
    // This example is confusing. We create an instance of the class with 
    // new, and then even if we don't call new when assigning b, we still get 
    // back the instance that was created with new. And shared is available 
    // on all "instances", since each "instance" is really just the first 
    // instance.
    var a = new MySingletonClass();
    var b = MySingletonClass();      // jshint ignore: line
    var c = new MySingletonClass();
    var d = MySingletonClass();      // jshint ignore: line
    a.display(a === b);
    b.display(a === c);
    a.display(a === d);
    a.display(b === c);
    b.display(c === d);
    var e = {};
    a.display(a === e);
    a.display(a.shared);
    a.display(b.shared);
    
});
