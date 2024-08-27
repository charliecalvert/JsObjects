# Simple State

This app is poorly named and should be renamed. It is very much a work in progress.

## Some steps in the convertion from create-react-app to webpack

```bash
 npm install --save-dev css-loader style-loader
 npm install pug
```

The following package eliminated warnings about import statements in my files:

```bash
npm i -D @babel/eslint-parser
```

I copied in the views (for pug)and routes (for express) folders and the file ./app.js
(for pug).

I copied in a components .babelrc

I added this code to the webpage configuration:

```javascript
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```

## Install Babel

``` bash
npm i @babel/cli
npm i @babel/plugin-proposal-class-properties
npm i -D @babel/core
npm i -D @babel/eslint-parser
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D babel-loader
```

## Remove Babel

``` bash
npm rm @babel/cli
npm rm @babel/*
npm rm @babel/plugin-transform-class-properties
npm rm @babel/core
npm rm @babel/eslint-parser
npm rm @babel/preset-env
npm rm @babel/preset-react
npm rm babel-loader
npm rm babel-eslint
```
