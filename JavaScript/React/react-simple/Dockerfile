FROM node:latest
RUN mkdir -p /home/bcuser/react-simple
WORKDIR /home/bcuser/react-simple
COPY package.json /home/bcuser/react-simple/
RUN npm install
COPY . /home/bcuser/react-simple
EXPOSE 30025
CMD [ "node", "bin/www" ]
