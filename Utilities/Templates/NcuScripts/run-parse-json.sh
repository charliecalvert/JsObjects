#! /bin/bash

# This script is used to run the go program
# It is used to run the go program

 npm audit --summary --json  > /home/ubuntu/temp/audit.json
 parse-json.js /home/ubuntu/temp/audit.json

