#!/bin/bash

CDSN=${JSOBJECTS_JAVASCRIPT_REACT}/src/create-directory-specific-ncu-script.js

# A function that takes the first parameter to this
# script as a directory name and ensures that it exists.
# If the directory does not exist, throw an
# error and exit.
ensure_directory_exists() {
    if [ ! -d "$1" ]; then
        echo "Error: Directory $1 does not exist."
        echo "Creating directory $1..."
        mkdir -p "$1"
        exit 1
    fi
}

ensure_directory_exists "$1"

# Copy files from React to src directory
# Dry run. No files will be copied.
rsync -auv ${JSOBJECTS_JAVASCRIPT_REACT}/src/* "$1"
rsync -av ${CDSN} "$1"
