# Jasmine Require Js

by Charlie Calvert

## Testing

I've created a [sample project][jas-req] to help you see how to test and use require. It is called **JasmineRequireJs** and is hosted on JsObjects.

Looking at that project, see this part of [**karma.conf.js**][karma-req]:

```javascript
frameworks: ['jasmine', 'requirejs'],

files: [
    'public/components/jquery/dist/jquery.min.js',
    'node_modules/jasmine-jquery/lib/*.js', {
        pattern: 'spec/test-*.js',
        included: false
    }, {
        pattern: 'public/javascripts/**/*.js',
        included: false
    },
    'spec/main-test.js'
],

// list of files to exclude
exclude: ['public/javascripts/main.js'],
```

Note the exclusion of **public/javascripts/main.js** and inclusion of **spec/main-test.js** that there are no frameworks loaded at the very bottom of the file.

I use **test-XXX.js** as the naming convention for require based tests, and **spec-XXX.js** for jasmine server side tests.

Look at [this sample][main-test-req] **main-test.js** file:

```javascript
function loadTestsIntoArray() {
    'use strict';
    var tests = [];
    for (var file in window.__karma__.files) {
        if (/test-/.test(file)) {
            console.log('Loaded test:', file);
            tests.push(file);
        }
    }
    return tests;
}

require.config({
    baseUrl: '/base',

    paths: {
        home: 'public/javascripts/home'
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});
```

Look at the way we [wrap our tests][test-sample-req] in a require **define** function:

```javascript
define(['home'], function(home) {
    'use strict';

    describe('Elvenware Simple Plain Suite', function() {

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        it('expects home.color to be red', function() {
            expect(home.color).toBe('red');
        });

        it('expects home.size to be big', function() {
            expect(home.size).toBe('big');
        });
    });

});
```

[jas-req]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/UnitTests/JasmineRequireJs
[karma-req]: https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/UnitTests/JasmineRequireJs/karma.conf.js
[main-test-req]: https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/UnitTests/JasmineRequireJs/spec/main-test.js
[test-sample-req]:https://github.com/charliecalvert/JsObjects/blob/master/JavaScript/UnitTests/JasmineRequireJs/spec/test-basic.js

