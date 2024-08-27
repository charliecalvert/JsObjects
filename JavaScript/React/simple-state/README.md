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

I copied in a views folder for pug.

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
