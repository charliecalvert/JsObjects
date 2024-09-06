#! /bin/bash

# This script is used to audit the npm packages and
# parse the json file to get the summary of the audit
# The script is used to run the parse-json.js file.
# The parse-json.js file is used to parse the json
# file and get the summary of the audit
# /home/ubuntu/Git/JsObjects/Utilities/Templates/JavaScript/parse-json.js
# or ~/bin/parse-json.js
npm audit --summary --json  > /home/ubuntu/temp/audit.json
parse-json.js /home/ubuntu/temp/audit.json

