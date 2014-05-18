/**
 * @author Charlie Calvert
 */


$(document).ready(function() {
    "use strict";
    function Foo() {}  // constructor
    Foo.prototype = { name: "Foo" };
    Foo.bar = 333;
    var foo = new Foo(); 

    var s = new elf.ShowPrototype();
    s.bar = 3;
    Array.prototype.foo = "Goober";    
    var a = new Array();
    s.showPrototype(a);    
    s.display(a.foo);
    a.bar = 5;
    s.showKeys(a);  //jshint ignore: line
    s.showKeys(new Object()); //jshint ignore: line
    s.showKeys(s);
    s.showKeys(foo);
    s.showKeys(Foo);
    s.showPrototype(new Object());
});
