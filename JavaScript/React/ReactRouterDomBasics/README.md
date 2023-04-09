# Overview

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

To run:

```bash
npm i
npm run build
npm start
```

## Gotchya

I kept getting: "Module not found: Error: Can't resolve './Routing' in '/home/ubuntu/Git/JsObjects/JavaScript/React/ReactRouterDomBasics/source'"

I sorted it ou with this in webpack.config.js:

```javascript
    resolve: {
        extensions: ['.js', '.jsx'],
    },
```

## React Router DOM

Install:

```bash
# npm i react react-dom
npm i react-router-dom
npm i style-loader css-loader
npm i @babel/plugin-transform-runtime
```

## Client Side

Start your client side code by editing **source/control.js** and adding **react-dom**.

Create react function components **Part One** and **Part Two**.

**react-router-dom** is used in **App.js**.

- [Functional Components](https://reactjs.org/docs/components-and-props.html)
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)

## Server Side

The usual Node JS code in **views** and **routes**.

Note **root** in **index.pug**.
