#!/bin/bash

if [ -d "node_modules" ]; then
    rm -r node_modules
fi

if [ -f "package-lock.json" ]; then
    rm package-lock.json
fi

pwd
ncu -u
npm version patch
npm i
