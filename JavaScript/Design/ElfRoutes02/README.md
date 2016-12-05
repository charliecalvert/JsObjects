# ElfRoutes02

_by [Charlie Calvert](http://www.elvenware.com)_


Programs in this series:

- [ElfRoutes01 is the simplest project][elfroutes01]
- [ElfRoutes02 adds an about page to elfRoutes01][elfroutes02]
- [ElfRoutesNameController with CouchDB][elfroutes-name-controller]
- [ElfRoutesReadController with CouchDB][elfroutes-read-controller]

[elfroutes01]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/ElfRoutes01
[elfroutes02]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/Design/ElfRoutes02
[elfroutes-name-controller]: https://github.com/charliecalvert/JsObjects/tree/master/Data/ElfRoutesNameController
[elfroutes-read-controller]: https://github.com/charliecalvert/JsObjects/tree/master/Data/ElfRoutesReadController

## Overview

This program is much like ElfRoutes01, except that it has an About page.

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

## Routes

Compare these two versions of findRoutes from **control.js**:

Original Version from ElfRoutes01:

```javascript
var findRoutes = (function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/home',
        controller: queryController
    }).otherwise({
        redirectTo: '/home'
    });
});
```

Updated version from ElfRoutes02:

```javascript
var findRoutes = (function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/home',
        controller: queryController
    }).when('/about', {
        templateUrl: '/about',
        controller: aboutController,
        resolve: {
            result: aboutController.about
        }
    }).otherwise({
        redirectTo: '/home'
    });
});
```

Notice that we now have a route that leads to a new controller called **aboutController**. It is called when the user selects a menuitem with an anchor that has the route "/about" in it and also fits a selector specified in **main.js**.

## Controllers

And here is the new **aboutController**:

```javascript
define(['runQuery'], function(runQuery) {
    'use strict';

    function init() {
        $('#aboutCharlie').click(function() {
            $('#charlie').html('This is a note about Charlie made visible when the user clicked the button.');
        });
    }

    var aboutController = function(query, result) {
        init();
        var debug = $('#debug');
        if (result.ok) {
            var text = 'It worked';
            if (result.data) {
                text += '\n' + JSON.stringify(result.data, null, 4);
            }
            debug.html(text);
        } else if (result.requestFailed) {
            debug.html(JSON.stringify(result.requestFailed, null, 4));
        }
    };

    aboutController.about = function($q) {
        return runQuery('/aboutText', $q);
    };

    return aboutController;
});
```

The key code here is the **aboutController** itself which gets called by the **runQuery** method.



