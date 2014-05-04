/**
 * @author Charlie Calvert
 */

var elf = {};

elf.SingletonModule = ( function() {

        function SingletonModule() {
            
            
            if (arguments.callee._singletonInstance) {
                return arguments.callee._singletonInstance;
            } else {
                arguments.callee._singletonInstance = this;
                return this;
            }
        }

        SingletonModule.prototype.publicMethod = function() {
            return "I'm the SingletonModule.publicMethod.";
        };

        SingletonModule.prototype.display = function(value) {
            $('#debug').append('<li>' + value + '</li>');
        };

        return SingletonModule;

    }());

$(document).ready(function() {
    var a = new elf.SingletonModule();
    var b = new elf.SingletonModule();
    var c = new elf.SingletonModule();
    var d = new elf.SingletonModule();
    a.display(a === b);
    a.display(a === c);
    a.display(a === d);
    a.display(b === c); 
    a.display(c === d); 
    // Sanity Check  
    var e = new Array();    
    a.display(a === e);
});
