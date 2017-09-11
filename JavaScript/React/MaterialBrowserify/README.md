# ReactEs6Babel

by Charlie Calvert

You might want to use two consoles:

- Console 1: **npm run build**
- Console 2: **npm start**

First run **npm run build** to create
**/public/javascripts/basics.js** from
**src/basics.js** and **src/show-me.js**.
This starts watchify running so your updates
will be compiled automatically. Watchify runs
browserify automatically when you update a
file.

Now open a second console and run **npm start**.

## Setup

npm install -g browserify
npm install --save react react-dom
npm install --save babelify babel-preset-react

or

npm install -g browserify
npm install --save react react-dom babelify babel-preset-react

You may also need **babel-preset-env**

Don't forget your **.babelrc** file!

