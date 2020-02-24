## Overview

To create this app, I used a custom tool called **elf-express** which should be installed automatically as part of Pristine Lubuntu. If that is not the case, it can be installed like this:

        npm i -g elf-express-generator

The app should end up in **~/npm/bin**.

Create a directory called ~/Source or whathaveyou. Navigate into it. Then issue these commands:

        elf-express test
        cd test
        npm i
        npm start
         
## Node Server

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

To run:

    npm i
    npm run build
    npm start

## React Router DOM

Install:

        npm i react react-dom
        npm i react-router-dom
        npm i style-loader css-loader

## Client Side

Start your client side code by editing **source/control.js** and adding **react-dom**.

Create react function components **Part One** and **Part Two**.

**react-router-dom** is used in **App.js**.

- [Functional Components](https://reactjs.org/docs/components-and-props.html)
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)

## Server Side

The usual Node JS code in **views** and **routes**.

Note **root** in **index.pug**.
