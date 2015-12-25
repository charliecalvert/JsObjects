## Overview

A tool called Jasmine JQuery will allow us to load arbitray HTML files (fixtures) into Jasmine so that we can run tests against them. Normally, we want to load only small chunks of HTML. However, at one point we might want to load the entire contents of the HTML code produced by **vidws/index.jade** into our tests and make sure it contains certain key elements.

We want to tests the contents of **views/index.jade** but not **views/layout.jade**. To do this, we need to remove the line that reads **extend layout** from **views/index.jade** and copy the results to another file called **views/fixture.jade**. When doing so, **views/index.jade** should not be changed. When we are done, **views/fixture.jade** should be very similar to **views/index.jade** but without the first line about extending **layout.jade**.

Here are the steps:

- Remove the **extends layout** line **views/index.jade**
- Put the results in **views/fixture.jade** without changine **views/index.jade**.
- Convert **views/fixture.jade** into **spec/fixtures/fixture.html**

You can do all the manually, or run this command:

	grunt fixture

This produces **spec/fixtures/fixture.html**. This is the code we want to use in our tests.

The rest of this document is an explanation of how to proceed if you want to set up and run this kind of test.

## Updates

Copy over the new and updated unit tests from:

	cp $ELF_TEMPLATES/UnitTest/BitlyRefine/*.js views/.

Then install some tools:

```bash
npm install jasmine-jquery --save-dev
npm install grunt-contrib-jasmine --save-dev
npm install grunt-exec --save
npm install grunt-contrib-jade --save
```

## Grunt

Add these tasks to your Gruntfile:

```javascript
jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    'spec/fixtures/fixture.html': ['views/fixture.jade', '$ELF_TEMPLATES/JadeMixins/*.jade']
                }
            }
        },

        exec: {

            stripExtends: {
                cmd: function() {
                    return 'sed "/extend/d" views/index.jade > views/fixture.jade';
                }
            }
        }
```

Then near the bottom load the tasks:

```javascript
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-exec');
```

And finally, register a new task near the very bottom:

```javascript
	grunt.registerTask('fixture', ['exec:stripExtends', 'jade', 'karma']);
```

## Karma Changes

In karma.conf load **jasmine-jquery**. The following is a sample of what your **files** section might look like once it is done. The first and last lines are the ones you need to focus on. The rest are just boilerplate you have already seen:

```javascript
files: [
	'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
    'public/components/jquery/dist/jquery.min.js',
    'public/javascripts/*.js',
    'spec/test*.js',
    'spec/**/*.html'
],
```

And put this in **karma.conf.js**:

```javascript
preprocessors: {
    '**/*.html': []
},
```

## Writing a Test

And here is the test, which goes in **spec/test-jasmine-jquery.js**

```javascript
describe('Test Jade', function() {
    'use strict';

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('fixture.html');
    });

    it('shows we can get at least 1 <P> element', function() {
        var paragraphs = $('p');
        expect(inputs.length).toBeGreaterThan(0);
    });

});
```

We are simply asking jasmine to prove to us that our HTML has at least one paragraph tag in it.

## Sanity Check

In JsObjects, there is a new script that does a rather shoddy job of looking through your **karma-conf.js** and **Gruntfile.js** files to be sure you have things set up correctly. You can copy the script to your **~/bin** directory and then run it in the root of the project you want to check. Here is a sample run:

```
$ ./check-karma-grunt-config

  - setup

js-beautify exists
beautified karma.conf.js - unchanged
beautified Gruntfile.js - unchanged

  - These tests are meant to help you find problems in
  - karma.conf and Gruntfile. They are not definitive

preprocessor mentioned
jasmine-jquery mentioned
exec task config mentioned
jade task config mentioned
grunt-contrib-clean loadNpmTask mentioned
grunt-contrib-jshint loadNpmTask mentioned
grunt-jscs loadNpmTask mentioned
grunt-jsbeautifier loadNpmTask mentioned
grunt-karma loadNpmTask mentioned
grunt-contrib-jade loadNpmTask mentioned
grunt-exec loadNpmTask mentioned
fixture registered task mentioned
beautify registered task mentioned
check registered task mentioned
test registered task mentioned
```

This script doesn't really prove much of anything, but it may help us find errors. Here, for instance, is a run in a project that is not properly configured for our jasmine-jquery tests:

```
check-karma-grunt-config 

*** setup ***

js-beautify exists
beautified karma.conf.js
beautified Gruntfile.js

*** These tests are meant to help you find problems in
*** karma.conf and Gruntfile. They are not definitive

preprocessor not found
jasmine-jquery not found
exec task config not found
jade task config not found
grunt-contrib-clean loadNpmTask not found
grunt-contrib-jshint loadNpmTask mentioned
grunt-jscs loadNpmTask not found 
grunt-jsbeautifier loadNpmTask not found
grunt-karma loadNpmTask mentioned
grunt-contrib-jade loadNpmTask not found
grunt-exec loadNpmTask not found
fixture registered task not found
beautify registered task not found
check registered task not found
test registered task mentioned
```

The output should be easier to read in the bash shell since it is colorized with missing code in red and found code in green.

## Example Program

I have an example program in JsObjects called [JasmineJQueryTest][jjt]. To use it, do the following:

```bash
grunt fixture
grunt test
```

It should produce the following output:

```bash
  Elvenware Simple Plain Suite
    ✓ expects true to be true

  Test Jasmine-JQuery Suite
    ✓ shows we can get at least 1 <P> element
```

[jjt]: https://github.com/charliecalvert/JsObjects/tree/master/JavaScript/UnitTests/JasmineJQueryTest

## Another Way to Load Jamine-jquery {#other-jasmine-jquery}

For some reason, I don't really like this one:

First install karma-jasmine-jquery:

```bash
npm install karma-jasmine-jquery
```

Then add it to the plugins section of **karma-conf.js**:

```javascripts
frameworks: ['jasmine-jquery', 'jasmine'],

plugins: ['karma-jasmine',
    'karma-spec-reporter',
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-jasmine-jquery'
]
```
