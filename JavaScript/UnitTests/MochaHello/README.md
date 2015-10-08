# Mocha Hello

To run:

* To install chai: **npm install**
* If mocha not installed then: **npm install -g mocha**
* **mocha test**

The code looks like this:

```javascript
var chai = require('chai');
var expect = chai.expect;

describe("Unit Test Demo", function () {

        it("proves true is true", function () {
            expect(true).to.equal(true);
        });

});
```
