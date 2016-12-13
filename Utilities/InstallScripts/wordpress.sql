#! /bin/bash

if [ -z "$WORDPRESS_DIR" ]; then
        echo "WORDPRESS_DIR is unset";
        exit 1
else
        echo "WORDPRESS_DIR is set to '$WORDPRESS_DIR'";
fi

if [ -z "$WORDPRESS_DATA_PASSWORD" ]; then
        echo "WORDPRESS_DATA_PASSWORD is unset."
        exit 1
else
        echo "WORDPRESS_DATA_PASSWORD is set.";
fi

create database if not exists "$WORDPRESS_DIR";
use "$WORDPRESS_DIR"


GRANT ALL PRIVILEGES ON wordpress.* TO "root"@"localhost" IDENTIFIED BY "$WORDPRESS_DATA_PASSWORD";
FLUSH PRIVILEGES;
show grants for 'root'@'localhost';
