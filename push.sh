#! /bin/bash

if [[ -z $1 ]]; then
    echo -e "You must pass in a commit message"
    exit
fi

NOW=$(date +"%m-%d-%Y")

git status
git add .
git status
git commit -m "$1: $NOW"
git push

