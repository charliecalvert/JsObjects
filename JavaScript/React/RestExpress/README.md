# RestExpress

by Charlie Calvert

Navigate to the root of the root of the project:

In one bash shell: **npm run build**

In the other: **npm start**

## Install

```bash
 npm install --save-dev @testing-library/react @testing-library/dom
 npm install --save-dev jest
```

## Run

Switch between App.js and AppCopy.js by changing the import statement in src/index.js.

```bash
sed -i 's/App/AppCopy/g' src/index.js
sed -i 's/AppCopy/App/g' src/index.js
```

In src/index.js:

```javascript
import App from './AppCopy';
```

or

```javascript
import App from './App';
```

## CSS to Center Horizontally and Vertically

```css
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    text-align: center;
    flex-direction: column;
}
```

## CSS to Center Horizontally but not Vertically

```css
.center-container {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
```

## Doesn't Work

```javascript
const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
/** @type {import('jest').Config} */

module.exports = {
    // ... your configuration options

    "testRegex": "((\\.|/*.)(spec|test))\\.js?$",
    verbose: true,
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        html: '<html lang="zh-cmn-Hant"></html>',
        url: 'https://jestjs.io/',
        userAgent: 'Agent/007',
    },
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.css$': 'jest-transform-css',
    },
    // toBeInTheDocument: true,
    "setupFilesAfterEnv": ["./jest.setup.js"],

    /*  compilerOptions: {
         "types": ["@testing-library/jest-dom"]
     },
      */
};
```
