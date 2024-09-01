# Readme

Creating a script to add webpack packages
Creating a script to remove webpack packages

## Add basic packages

```bash
#!/bin/bash

npm i eslint-plugin-jest gulp nodemon react
npm i -D babel-eslint eslint-config-airbnb eslint-plugin-import \
    eslint-plugin-react eslint-plugin-react-hooks jest npm-run-all
```

## Remove basic packages

```bash
#!/bin/bash

npm remove eslint-plugin-jest gulp nodemon react
npm remove babel-eslint eslint-config-airbnb eslint-plugin-import \
    eslint-plugin-react eslint-plugin-react-hooks jest npm-run-all
```

## Remove Webpack packages

```bash
#!/bin/bash

npm rm @babel/cli @babel/plugin-proposal-class-properties cookie-parser debug express http-errors morgan pug react react-dom

npm rm @babel/core @babel/eslint-parser @babel/preset-env @babel/preset-react babel-loader css-loader style-loader webpack webpack-cli
```

## Add webpack project packages

```bash
#!/bin/bash

npm i @babel/cli @babel/plugin-proposal-class-properties cookie-parser debug express http-errors morgan pug react react-dom

npm i -D @babel/core @babel/eslint-parser @babel/preset-env @babel/preset-react babel-loader css-loader style-loader webpack webpack-cli
```
