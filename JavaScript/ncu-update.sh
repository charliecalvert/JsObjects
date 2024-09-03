#!/bin/bash

# pwd
# ncu -u
# rm -r node_modules
# rm package-lock.json
# npm version patch
# npm i

# Run a command in all subdirectories that contain a package.json file
# except node_modules and .git directories.
find . -name package.json \
 -not -path '*/node_modules/*' \
 -not -path '*/.git/*' \
 -execdir sh -c 'echo "Cleaning {}"; pwd && \
    ncu -u && rm -r node_modules/ && rm package-lock.json && \
    npm i && npm version patch' \;

git add .
git commit -m "Update dependencies"
git push
