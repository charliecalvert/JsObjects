
NodeModules
===========

This program shows how to modularize your code when using node. It contains:

- Two modules called **Module01.js** and **Module02.js**
- A file called **server.js** that imports and uses the modules.

The Modules
-----------

First we create two modules. The first is very simple, and exports a single method:

    function getNine() {
    	return 9;
    }
    
    // Export the getNine method from this module. 
    // Otherwise it cannot be called from the main program.
    exports.getNine = getNine;

And here is the other module:

    var MyObject = (function() {
    	
    	// Private Data
    	var helloString = "MyObject says hello";
    
    	// Constructor
    	function MyObject() {
    		console.log("MyObject.Constructor called");
    	}
    
    	MyObject.prototype.sayHello = function() {
    		console.log(helloString);
    	};
    
    	return MyObject
    
    }());
    
    exports.myObject = new MyObject();
    
As you can see, this second module uses the modular pattern. It exports a single object with:

- Private data
- A constructor
- A public method

Use Modules
-----------

In this section we examine **server.js**. To import the module we use the require statement:

    var mod01 = require('./Library/Module01');
    var mod02 = require('./Library/Module02');

Notice the syntax. It is abit tricky. Our modules are in a directory called **Library**. But the most complicated factor here is the need to start that these are relative paths, and that we are starting in the current directory. We specify that want to work with the current directory by including a period: **'./Library/...'**. Don't forget the period!

Once we have imported the modules, it is obvious how to use the first, and simpler of the two:

    var nine = mod01.getNine()

That is clear enough. It is a bit trickier to see how we use the modular pattern:

    mod02.myObject.sayHello();
    
The question we have to ask here is whether the modular pattern gets us anything in this case. After all, the **require** syntax probably already does all that is needed to modularize our code and the use of the modular pattern is reduntant. I still like use the pattern, however, simply because I like object syntax.  

For now, it is okay if you use either technique.

> Written with [StackEdit](https://stackedit.io/).