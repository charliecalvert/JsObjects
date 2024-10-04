#!/bin/bash

# Check if at least two arguments are provided

TMP_HOME='./dir-compare.sh /tmp/JsObjects/JavaScript/React/simple-radio-buttons /home/ubuntu/Git/JsObjects/JavaScript/React/simple-radio-buttons'
HOME_TMP='./dir-compare.sh /home/ubuntu/Git/JsObjects/JavaScript/React/simple-radio-buttons /tmp/JsObjects/JavaScript/React/simple-radio-buttons'

if [ "$1" == "TMP-HOME" ]; then
    $TMP_HOME
elif [ "$1" == "HOME-TMP" ]; then
    $HOME_TMP
else
    echo "Usage: $0 {TMP-HOME|HOME-TMP}"
    exit 1
fi
