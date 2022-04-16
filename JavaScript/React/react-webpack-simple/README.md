# Overview

If you can't find JSX files without including their extension then try adding this to webpack.config.js:

    resolve: {
        extensions: ['.js', '.jsx'],
    },

## Some installs

    npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react
    npm remove babel-core babel-preset-es2015 babel-preset-react
    npm i -D webpack-cli
    npm i webpack

    npm i babel-loader
    npm i -D @babel/plugin-transform-runtime

    npm i -D eslint-config-airbnb \
          eslint-plugin-import \
          eslint-plugin-react \
          eslint-plugin-react-hooks \
          babel-eslint jest
