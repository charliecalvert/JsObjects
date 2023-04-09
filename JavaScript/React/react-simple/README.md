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

## Docker

Open up the Dockerfile and try to understand it.

To create a Docker image from the **Dockerfile**:

	docker build --tag react-simple .

To run the image:

	docker run -d -p 30025:30025 react-simple

Now go to a browser and navigate to port 30025. To get your IP address, run **ip addr**.
