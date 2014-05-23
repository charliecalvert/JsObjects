#Bridge Sailor

This program demonstrates how to use the bridge pattern to form
a bridge between the body of a program and three classes that
behave in a very similar way.

We can create a Bridge and have it behave different ways by simply
initializing it with different classes:

	var bridge = new SailorBridge();

	bridge.setBoat(sloop);
	runBridge(bridge); // Now the bridge runs like a sloop

	bridge.setBoat(yawl);
	runBridge(bridge); // Now the bridge runs like a yawl

	bridge.setBoat(ketch);
	runBridge(bridge); // Now the bridge runs like a ketch

**runBridge** will behave differently depending on 
what kind of bridge we pass in. If you pass in a **sloop** then
it behaves like a sloop, if you pass in **yawl** then it behaves
like a yawl, etc. 

The actual program is a bit more 
complex because we have two different kinds of bridges: a 
**sailorBridge** and a **sailorBridgeExpert**. The essence of the
pattern, however, is caught in the code above.

## ELF

The **elf** object is used only to help you debug the program. All the 
classes created in BridgeSailor are made properties of the **elf**
object. As a result, you can inspect this one object in the debugger
and get an overview of the current state of the program.

##Details

Use the bridge pattern and also a decorator. But the main point is to
use the Bridge pattern.

The Bridge pattern is found in **SailorBridge.js**. The **SailorBridge**
object uses the [Modular][modular] pattern and the **Bridge Pattern**. It also
is configured to be used by **requirejs**.

The Sailer object that can:

- Tack
- Luff
- Anchor

##Emulation

Note that we have:

	<meta name="viewport" content="width=device-width, initial-scale=1">
	
Go to:
 
	Chrome | Developer Tools (Debugger) | Console | Emulation
	
There you can test with Samung S4, iPhone, and tablets. 
	
## Useless	

Ignore these notes for now. Don't read this.

- Abstraction/Implementor: Sailor
- RefinedAbstraction: ExpertSailor
- Concrete: Sloop, Ketch, Yawl

Use the factory pattern to create a Ketch. Pass the **Ketch** object to your Bridge 
pattern and show that it can 

- [UML](http://www.dofactory.com/Patterns/PatternBridge.aspx#UML)

 
[modular]: http://www.elvenware.com/charlie/development/web/JavaScript/JavaScriptModules.html

