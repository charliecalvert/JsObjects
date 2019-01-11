NodeRoutes01
===========

This program is currently broken. See NodeRoutesReact03.

This program shows how to handle Express Routes.

When you are in the browser, and you can make an ajax call to the client using **$.ajax**, **$.load**,
**$.get** etc. When you make these calls, you generally pass in a URL:

	$("#MyId").load('/getNine');

The end part of the URL is called a route. You can also pass that information with a plain URL:

	http://localhost:30025/getNine

In either case, the server has to find the **getNine** route and do something with it. In
general, this means that you set up an Express route like this:

	router.get('/getNine', function(request, response) {});

Or you might set one up like this, if you want to do a post:

	router.post('/getNine', function(request, response) {});

These **router** methods live on the server. They are called when the
ajax function is called on the client. For instance, they are called when
the appropriate URL is passed in via the address bar in the browser.

These are the steps to set up the router:

```
var router = express.Router();

// Middleware
app.use('/', router);
```

And these steps set up the body-parser which is used in POST calls:

```
// For posts
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```

This program shows how to call and set up these routes, and how to
pass information back and forth between the client and the server.

A classic express program has a somewhat more complex structure, but
this is a good starting place if you are new to the technology.

With a get, the parameters are passed in request.query

To handle a post, we have to add bodyParser, shown above
Now our parameters come in request.body
