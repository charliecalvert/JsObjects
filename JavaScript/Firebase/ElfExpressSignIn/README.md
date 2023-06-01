## Overview

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

To run:

    npm i
    npm run build
    npm start

## Client Side

Start your client side code by editing **source/control.js**

## Server Side

The usual Node JS code in **views** and **routes**.

## Errors

Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console. Otherwise, you will get an error like this:

    FirebaseError: Firebase: No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app). (app/no-app).

Look in the file **source/elf-firebase.js**.

Look at: https://console.firebase.google.com/project/<YOUR-PROJECT>/settings/general/ for the authDomain.