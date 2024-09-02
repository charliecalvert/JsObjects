#!/bin/bash

# pwd
# ncu -u
# rm -r node_modules
# rm package-lock.json
# npm version patch
# npm i

# Attempt to build the project
# NOTICE: This function is not used in this script
function build_project() {
    local dir=$1
    echo "Building project in directory: $dir"
    pwd
    npm run build
    if [ $? -ne 0 ]; then
        echo "Build failed in directory: $dir"
        return 1
    fi
    return 0
}

# Run a command in all subdirectories that contain a package.json file
# except node_modules and .git directories.
find . -name package.json \
    -not -path '*/node_modules/*' \
    -not -path '*/.git/*' \
    -execdir sh -c 'echo "Building {}"; pwd && \
    rm -r node_modules/ && rm package-lock.json && \
    npm i && \
    if [ $? -ne 0 ]; then
        echo "Build failed in directory: $dir"
        return 1
    fi && /
    npm version patch' \;



git add .
git commit -m "Update dependencies"
git push
