#! /bin/bash

CANONICAL=/home/charlie/Git/JsObjects/Python/RegEx/CheckProjects.py


compare() {
    echo "********"
    echo Name = $CURRENT_NAME/CheckProjects.py
    diff -b $CURRENT_NAME/CheckProjects.py $CANONICAL
}


ANDERSON=isit320_anderson
JACKSON=isit320_jackson
KASHCHEEV=isit320_kashcheev
LI=isit320_li
CALVERT=isit320_mcalvert
PENNOCK=isit320_pennock
VENDROVSKA=isit320_vendrovska
WU=./isit320_wu/
WADLEY=./isit320_wadley
WATERS=./isit320_waters 

CURRENT_NAME=$ANDERSON
compare
CURRENT_NAME=$JACKSON
compare
CURRENT_NAME=$KASHCHEEV
compare
CURRENT_NAME=$LI
compare
CURRENT_NAME=$CALVERT
compare
CURRENT_NAME=$PENNOCK
compare
CURRENT_NAME=$VENDROVSKA
compare
CURRENT_NAME=$WU
compare
CURRENT_NAME=$WADLEY
compare
CURRENT_NAME=$WATERS
compare


