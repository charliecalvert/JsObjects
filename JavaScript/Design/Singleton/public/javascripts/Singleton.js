/**
 * @author Charlie Calvert
 */

// From: http://code.google.com/p/jslibs/wiki/JavascriptTips#Singleton_pattern

function MySingletonClass() {

	if (arguments.callee._singletonInstance) {
		return arguments.callee._singletonInstance;
	}

	arguments.callee._singletonInstance = this;

	this.Foo = function() {
		// ...
	};
}

var a = new MySingletonClass()
var b = MySingletonClass()
Print(a === b);
// prints: true