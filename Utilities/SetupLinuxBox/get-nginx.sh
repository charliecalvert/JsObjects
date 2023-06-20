#! /bin/bash

sudo apt update
sudo apt install nginx
cd /etc/nginx/sites-available/
sudo cp -v ${ELF_TEMPLATES}/HtmlJson/ec2-nginx-simple .
cd ../sites-enabled/
sudo rm default
sudo ln -s /etc/nginx/sites-available/ec2-nginx-simple default
cd /var/www
sudo mkdir elves
cd elves
sudo cp -v ${ELF_TEMPLATES}/HtmlJson/default-index.html /var/www/elves/index.html
# sudo nano index.html
sudo service nginx restart
sudo service nginx status
