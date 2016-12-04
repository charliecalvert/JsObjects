# ElfRoutes01

This program is much like **ElfRoutes02**, except that it has no **About** page. If you compare this program with **ElfRoutes02** you will see why this architecture is:

- Open to extension but closed to change
- An example of loose coupling

The architecture, found mostly in the **route-provider** folder, is based on the **routeProvider** in Angular 1. I'm not trying to supply an alternative to angular or anything of the sort. I'm simply trying to give students code that implements the open/closed principle without having to bring in all of some huge library such as angular or react. I'm not knocking those libraries, in fact, I advocate using them, but I don't to teach those libraries, I want to show whey they are good.

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

Study the **findRoutes** method from **control.js**:

The version from ElfRoutes01:

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

Notice that we have a route that leads to a controller called **queryController**.

## Controllers

And here is the **queryController**:

```javascript
define(['runQuery'], function(runQuery) {
    'use strict';

    function init() {
        $('#target').submit(function(event) {
            event.preventDefault();
            var userFormData = $(this).serialize();
            $('#formResults').html(userFormData);
            $.getJSON('/user-form?' + userFormData, function(result) {
                $('#debug').html(JSON.stringify(result, null, 4));
            });
        });

        $('#help').click(function() {
            $('#charlie').html('<strong>Help Text</strong>: Select some controls and press the Submit button.');
        });
    }

    var queryController = function(query, result) {
        init();
    };

    return queryController;

});
```

The key code here is the **init** method which gets called by the **queryController** which is in turn called by code in **route.js**.

The code in **route.js** is called because the **queryController** is listed in the appropriate **.when** chained method in **control.js**.
