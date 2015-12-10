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

You may also see some tests that begin **charlie-test-**. You can ignore these tests. Of course, if you did want to use them, you should add the following to the **files** configuration object in **karma.conf.js**:

```javascript
'spec/charlie-test*.js'
```

