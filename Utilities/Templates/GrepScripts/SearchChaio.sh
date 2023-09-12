#!/bin/bash

# Search with wildcard for text in ~/Git/charliecalvert.github.io/elves/_posts

cd ~/Git/charliecalvert.github.io/elves/_posts
FLAGS='-r -l'
INCLUDE='--include=*.md --include=*.markdown'
EXCLUDE='--exclude=bundle.js --exclude-dir=node_modules --exclude-dir=.git'
grep ${FLAGS} ${INCLUDE} ${EXCLUDE} "$1"
