#!/bin/bash

# if a directory exists run a command

# Directory to check
DIR="node_modules"
PLJ="package-lock.json"

# Check if the directory exists
if [ -d "$DIR" ]; then
  echo "$DIR exists. Running command..."
  # Replace the following line with the command you want to run
  rm -r node_modules/
else
  echo "$DIR does not exist."
fi

# Check if the file exists
if [ -f "package-lock.json" ]; then
  echo "$PLJ exists. Running command..."
  # Replace the following line with the command you want to run
  rm package-lock.json
else
  echo "$PLJ does not exist."
fi

# Check if package.json exists
if [ -f "package.json" ]; then
  echo "File exists. Running command..."
  # Replace the following line with the command you want to run
  npm i
else
  echo "package.json does not exist."
fi
