This is an old project that uses Jasmine and Chai. The two products do not integrate well together. If I use Chai as my expect engine, then Jasmine gives me warnings. As a result, I write this, using both Chai and a default Jasmine expect statement. It is clumsy:

```javascript
var chaiExpect = chai.expect;
chaiExpect(elvenController.hint.length).to.equal(8);
expect(true).toBe(true);
```

A better solution would be to use Mocha or Jest.