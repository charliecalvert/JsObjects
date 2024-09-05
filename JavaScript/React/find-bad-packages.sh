#!/bin/bash

# Run a command in all subdirectories that
# contain a package.json file
# except node_modules and .git directories.
# This is useful for running npm audit or npm update
# in all subdirectories that contain a package.json file.


find . -name package.json \
 -not -path '*/node_modules/*' \
 -not -path '*/.git/*' \
 -execdir sh -c 'run-parse-json.sh' \;
