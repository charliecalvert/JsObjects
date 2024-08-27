## Overview

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

To run:

````bash
npm i
npm run build
npm start
```

## Install Babel

```bash
npm i @babel/cli
npm i @babel/plugin-proposal-class-properties
npm i -D @babel/core
npm i -D @babel/eslint-parser
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D babel-loader
```

## Client Side

Start your client side code by editing **source/control.js**

## Server Side

The usual Node JS code in **views** and **routes**.

## Assignment

Start with elf-express. Add at least three React Components, the first of which owns the second two:

- App
- DayBoxes
- EcmaRadios

Create a React component called **DayBoxes** with three checkBoxes:

- Sunday
- Monday
- Tuesday

Display the selected radioBoxes in a separate React component called **Display**.

Create a React component called **EcmaRadios** with three radioButtons:

- EcmaScript 4
- EcmaScript 5
- EcmaScript 6

Display the selected radioButton in a separate React Control Called **Display**.
