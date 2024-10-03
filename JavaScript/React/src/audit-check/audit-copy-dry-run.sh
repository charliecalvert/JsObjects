#!/bin/bash

CDSN=${JSOBJECTS_JAVASCRIPT_REACT}/src/create-directory-specific-ncu-script.js
MAKE_AUDIT_DR=${JSOBJECTS_JAVASCRIPT_REACT}/make-audit-data-report.js

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

ensure_directory_exists "$1"/src

# Copy files from React to src directory
# Dry run. No files will be copied.
rsync -aunv ${JSOBJECTS_JAVASCRIPT_REACT}/src/* "$1"/src/
rsync -anv ${CDSN} "$1"/src/
rsync -anv ${MAKE_AUDIT_DR} "$1"

echo "Dry run complete. No files were copied."
echo "Still a work in progress. BUGGY! Do not run this script."
echo "Now run this: node make-audit-data-report.js
echo "Now run: ./create-audit-data-report.js
echo "Then run: node make-audit-data-report.js
echo "Then run: cp -v --no-clobber  ~/temp/auditDataReports-2024-10-03_14-21-19.json dir-specific-ncu-script.js
echo "Then run: node src/audit-check/call-perform-audit-check.js
