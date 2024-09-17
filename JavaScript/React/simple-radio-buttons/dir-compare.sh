#!/bin/bash

# Check if at least two arguments are provided
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 <directory1> <directory2> [exclude_pattern]"
    exit 1
fi

DIR1=$1
DIR2=$2
EXCLUDE_PATTERN=$3
# OUTPUT_FILE=$4

# Check if the provided arguments are directories
if [ ! -d "$DIR1" ]; then
    echo "Error: $DIR1 is not a directory."
    exit 1
fi

if [ ! -d "$DIR2" ]; then
    echo "Error: $DIR2 is not a directory."
    exit 1
fi
# Compare the directories, excluding specified file types if provided
if [ -n "$EXCLUDE_PATTERN" ]; then
    diff -rq --exclude=".git" --exclude="$EXCLUDE_PATTERN" "$DIR1" "$DIR2"
else
    diff -rq --exclude=".git" --exclude="*.save" --exclude="*.old" --exclude="*.sh" --exclude="README.md"  "$DIR1" "$DIR2"
fi

# Compare the directories, excluding specified file types if provided
# if [ -n "$OUTPUT_FILE" ]; then
#     eval diff -rq $EXCLUDE_OPTIONS "$DIR1" "$DIR2" > "$OUTPUT_FILE"
#     DIFF_COUNT=$(wc -l < "$OUTPUT_FILE")
# else
#     DIFF_OUTPUT=$(eval diff -rq $EXCLUDE_OPTIONS "$DIR1" "$DIR2") > "output.txt"
#     DIFF_COUNT=$(echo "$DIFF_OUTPUT" | wc -l)
#     echo "$DIFF_OUTPUT"
# fi

# # Print the summary
# echo "Summary: $DIFF_COUNT differences found."

# Exit with the status of the diff command
exit $?
