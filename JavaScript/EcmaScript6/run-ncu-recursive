#! /usr/bin/env bash
FOO_BAR="zfoobar"

if [ -f "$FOO_BAR" ]; then
  rm "$FOO_BAR"
fi

#  find . -iname "package.json" -not -path "**/node_modules/**" -not -path "**/bower_components/**"  -printf '%h\n'

# Find directories with package.json and rn ncu and npm i in them
find .  -not -path "**/node_modules/**" -name "package.json" -exec sh -c '
   for file do
     dir=${file%/*}
     echo "cd $PWD/$dir  && ncu -u && npm i" >> zfoobar
   done' sh {} +

chmod +x "$FOO_BAR"

./"$FOO_BAR"

if [ -f "$FOO_BAR" ]; then
  rm "$FOO_BAR"
fi