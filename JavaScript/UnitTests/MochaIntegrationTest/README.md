# Mocha Integration Tests

This example shows two things:

- How to write integration tests
- How to insert HTML into a mocha test

Note that in our tests we never click (trigger) the <strong>Get Scientists</strong> button
because we have not provided a way to know when it returns with our JSON. We can however,
call the public method of <strong>Control.js</strong> called <strong>getScientists</strong>.
That method can be usefully called by our tests because we can know when it returns.
In particular, we pass it a callback which is called when it retrieves the JSON we requested.
