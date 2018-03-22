# Array All

This shows how to use a tool called [Browserify][brow] to make it simple to test modules that are used on the client.

The key feature here is [Browserify][brow] itself. We use it convert server side JS into code that can be used on client:

    browserify --debug public/control.js > public/bundle.js

This combines the following files into a single file called **bundle.js**:

- app.js
- ArrayAll.js
- control.js
- CvsToArray.js

The use of the **--debug** flag allows us to create "source maps" that allow us to debug our files as if they were still the individual files shown above. In other words, the debugger shows us a list of the four files shown above. The client side code is really only in **bundle.js**, but the source maps allow the debugger to mock the original files, while still giving us access to **bundle.js**.

![Array All in Chrome Debugger](https://s3.amazonaws.com/bucket01.elvenware.com/images/array-all.png)

Look carefully at the screenshot of the debugger. Note that you can see both **bundle.js** and the files such as app.js and control.js that are "bundled" up inside it. We are able to set breakpoints in the mocked files.

Note also, that on the client, we need to load only **bundle.js**:

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Array All</title>
        <script src="/bundle.js"></script>
    </head>
    // Code omitted here...
</html>
```

## Testing

Browserify allows us to use NodeJs [require][req] syntax in our tests:

```javascript
describe("An Array Suite", function() {
    'use strict';

    const app = require("../public/app.js");

    beforeAll(function() {
        app.init();
    });

    it("Can create ArrayAll", function() {
        expect(app.arrayAll).not.toBeNull();
    });
});
```
[brow]: https://github.com/browserify/browserify
[req]: http://adrianmejia.com/blog/2016/08/12/Getting-started-with-Node-js-modules-require-exports-imports-npm-and-beyond/
