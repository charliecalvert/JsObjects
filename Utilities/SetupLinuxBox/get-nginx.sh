#! /bin/bash

sudo apt update
sudo apt install nginx
cd /etc/nginx/sites-available/
sudo nano tutorial
cd ../sites-enabled/
sudo rm default
sudo ln -s /etc/nginx/sites-available/tutorial default
cd /var/www
sudo mkdir elves
cd elves
cp ${ELF_TEMPLATES}/HtmlJson/default-index.html /var/www/tutorial/index.html
sudo nano index.html
sudo service nginx restart
sudo service nginx status
