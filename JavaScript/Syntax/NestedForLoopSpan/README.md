# For Loop Nested

To run the end to end tests:

- Insure than [TestCafe][tc] is installed.
  - npm install -g testcafe
- Run the test in Chrome, FireFox or Chromium:
  - testcafe chrome test-cafe-starter.js
  - testcafe firefox test-cafe-starter.js
  - testcafe chromium test-cafe-starter.js
- This also works:
  - npm test

When testing, you should see output like this:

    $ testcafe firefox test-cafe-starter.js
     Running tests in:
     - Firefox 58.0.0 / Ubuntu 0.0.0

     Getting Started
     ✓ My first test
     ✓ My second test
     ✓ My second test


     3 passed (0s)

[tc]: https://github.com/DevExpress/testcafe
