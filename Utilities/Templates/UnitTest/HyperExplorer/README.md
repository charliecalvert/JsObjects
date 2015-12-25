## Optional Tests

Most tests begin with **test-**. To include them, put this in the files object found in **karma.conf.js**:

```javascript
'spec/test*.js',
```

Some tests are optional (extra credit) and begin with **opt**. These are mostly twitter tests, which were added so late in the quarter that I did not want to insist that you include them in the final. Instead I made them optional. These tests begin with **spec/opt-test-**. To include them, write the following in the **files** object found in **karma.conf.js** :

```javascript
'spec/opt-test*.js',
```

When included these tests in my project, I had about 126 total tests.

## Test Directories

In **$ELF_TEMPLATES/UnitTest/HyperExplorer** there are two directories called **data** and **fixtures**. Your data directory should hold files like:

- bitly-links.js
- delicious-javascript-links.js
- tweets.js
- tweets-timeline.js

There is also a fixture directory. Your fixture directory should hold files like this:

- bitly.html
- delicious.html
- fixture.html
- test-local-cloud.html
- twitter.html

To create some of the fixture code, expand the code in the files directory for **karma.conf.js**:

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
            'spec/fixtures/delicious.html': ['views/delicious.jade', '$ELF_TEMPLATES/JadeMixins/*.jade'],
            'spec/fixtures/fixture.html': ['views/fixture.jade', '$ELF_TEMPLATES/JadeMixins/*.jade'],
            'spec/fixtures/twitter.html': ['views/twitter.jade', '$ELF_TEMPLATES/JadeMixins/*.jade']

        }
    }
},
```
