# ElfRoutesRead Controller

This program is much like **ElfRoutesReadController**, except that it:

- Works with Bulk Data rather than One Document
- Provides an example of working with views and design docs

By now you should see how this architecture makes it easy to add new features to earlier programs in this series such as:

- [ElfRoutes01 is the simplest project][elfroutes01]
- [ElfRoutes02 adds an about page to elfRoutes01][elfroutes02]
- [ElfRoutesNameController with CouchDB][elfroutes-name-controller]
- [ElfRoutesReadController with CouchDB][elfroutes-read-controller]

[elfroutes01]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/ElfRoutes01
[elfroutes02]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/ElfRoutes02
[elfroutes-name-controller]: https://github.com/charliecalvert/JsObjects/tree/master/Data/ElfRoutesNameController
[elfroutes-read-controller]: https://github.com/charliecalvert/JsObjects/tree/master/Data/ElfRoutesReadController

It works so easily because it is:

- Open to extension but closed to change
- An example of loose coupling

The architecture, found mostly in the **route-provider** folder, is based on the **routeProvider** in Angular 1. I'm not trying to supply an alternative to angular or anything of the sort. I'm simply trying to give students code that implements the open/closed principle without having to bring in all of some huge library such as angular or react. I'm not knocking those libraries, in fact, I advocate using them, but I don't to teach those libraries, I want to show whey they are good.

![Name Controller Screen](https://s3.amazonaws.com/bucket01.elvenware.com/images/elf-routes-read-controller.png)

## Flow

1. User selects menu item
2. Code in main.js intercepts the action if it matches a particular selector
3. Request is routed to the **.when** chained methods in **control.js**
4. If a **resolve** property exists in the **.when** chain,
    - then call the method or methods specified by the property.
    - else call the controller object directly
5. If one of the resolve methods call runQuery, then it will call the controller object

Here are the selectors in **main.js** that defines which anchors (hyperlinks) get routed to the chained **.when** route providers in **control.js**.

```javascript
$('ul li a').click(go);
$('.navbar-brand').click(go);
```

It should be obvious that it is easy to add or remove selectors as needed.

**NOTE**: _This step with the selectors is usually handled by catching all URLs that contain a hash (#) symbol. I don't like that system very much, but it is arguably better than what I've done here. Sometimes you have to try an experiment before seeing why people developed a certain technique._

Be sure to study:

- main.js
- control.js
- controllers/name-controller.js
