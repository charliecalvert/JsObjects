#!/bin/bash

ULYSSES="Ulysses.txt"
LEO="LeonardoNotebooks.txt"
OUTLINE="TheOutlineofScience.txt"
GUTENBERG=$HOME/gutenberg

wget http://www.gutenberg.org/ebooks/4300.txt.utf8
mv 4300.txt.utf8 $ULYSSES
wget http://www.gutenberg.org/ebooks/5000.txt.utf8
mv 5000.txt.utf8 $LEO
wget http://www.gutenberg.org/ebooks/20417.txt.utf8
mv 20417.txt.utf8 $OUTLINE

if [ ! -d "$GUTENBERG" ]; then
	mkdir $GUTENBERG    
fi

if [ -d "$GUTENBERG" ]; then
	mv $ULYSSES $GUTENBERG/.
	mv $LEO $GUTENBERG/.
	mv $OUTLINE $GUTENBERG/.
fi