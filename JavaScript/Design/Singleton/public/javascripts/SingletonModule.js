/**
 * @author Charlie Calvert
 */

Elf.SingletonModule = ( function() {

		arguments.callee._singletonInstance = this;

		function SingletonModule() {
			if (arguments.callee._singletonInstance) {
				return arguments.callee._singletonInstance;
			}
		}


		SingletonModule.prototype.publicMethod = function() {
			return "I'm the SingletonModule.publicMethod.";
		};

		return SingletonModule;

	}());

var a = new MySingletonClass()
var b = MySingletonClass()
Print(a === b);
// prints: true