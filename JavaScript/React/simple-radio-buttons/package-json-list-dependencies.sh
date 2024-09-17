#! /usr/bin/env bash

# List all dependencies in the local package.json file
if [ -f "package.json" ]; then
# show dependencies and devDependencies:
cat package.json | jq '{dependencies, devDependencies}'
# show only the package names
echo -e '\nDependencies:' > package-names.txt
cat package.json | jq -r '.dependencies | keys[]' >> package-names.txt
echo -e '\nDev Dependencies:' >> package-names.txt
# show only the package names and write them to a file
cat package.json | jq -r '.dependencies, .devDependencies | keys[]' >> package-names.txt
else
    echo "No package.json file found in the current directory."
    exit 1
fi

# GREP='grep -r --include=package.json --exclude=bundle.js --exclude-dir=node_modules --exclude-dir=static --exclude-dir=bower_components --exclude-dir=.config --exclude-dir=.mozilla --exclude-dir=.metadata'
# C=''
# for i in "$@"; do
#     C="$C \"${i//\"/\\\"}\""
# done

# bash -c "${GREP} ${C}"

# echo -e '\nExit Code:' $?
