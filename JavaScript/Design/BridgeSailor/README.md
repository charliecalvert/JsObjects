#Bridge Sailor

Use the bridge pattern and also a decorator. But the main point is to
use the Bridge pattern.

The Bridge pattern is found in **SailorBridge.js**. The **SailorBridge**
object uses the [Modular][modular] pattern and the **Bridge Pattern**. It also
is configured to be used by **requirejs**.

The Sailer object that can:

- Tack
- Luff
- Anchor

Use the factory pattern to create a Ketch. Pass the **Ketch** object to your Bridge 
pattern and show that it can 


- [UML](http://www.dofactory.com/Patterns/PatternBridge.aspx#UML)

- Abstraction/Implementor: Sailor
- RefinedAbstraction: ExpertSailor
- Concrete: Sloop, Ketch, Yawl
 
[modular]: http://www.elvenware.com/charlie/development/web/JavaScript/JavaScriptModules.html