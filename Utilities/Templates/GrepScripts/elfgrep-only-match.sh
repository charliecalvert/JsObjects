#! /bin/bash

# ************************
# elfgrep-only-match
# ************************
# -r      Read all files under each directory, recursively, following
# -o      Print each match, but only the match, not the entire line.
# -h      Never print filename headers (i.e. filenames) with output lines.
# -w      Searched for as a word (as if surrounded by `[[:<:]]' and `[[:>:]]';

grep -roh --include=*.js --exclude-dir=node_modules --exclude-dir=bower_components --exclude=angular*.js $1

