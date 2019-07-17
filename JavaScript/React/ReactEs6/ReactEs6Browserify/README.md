# ReactEs6Babel

by Charlie Calvert

I wrote this years ago when I was first starting with React. It was updated in July 2019 to support updated packages, but it is no longer the style I use. I keep for historical reasons and in case anyone is interested in using **browserify**.

Like this:

    npm i
    npm run build
    bower install
    npm start
    
Run **npm run build** to create
**/public/javascripts/basics.js** from
**src/basics.js** and **src/show-me.js**.

If you modify **do-brow** it can start **watchify** running so your updates will be compiled automatically. Watchify runs
browserify automatically when you update a file.

If you run **watchify** you will probably want a second console and in it run **npm start**.

