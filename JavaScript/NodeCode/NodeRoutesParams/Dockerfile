# specify the node base image with your desired version node:<version>
FROM node:11.5.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# replace this with your application's default port
EXPOSE 30025

CMD [ "npm", "start" ]

