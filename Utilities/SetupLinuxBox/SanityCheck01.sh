#! /bin/bash

RESULTS=Results.txt

which git > $RESULTS
which node >> $RESULTS 
which npm >> $RESULTS 
which geany >> $RESULTS 
which ssh >> $RESULTS

@ECHO OFF

echo -----------------------------------------
echo We are now going to examine $RESULTS
echo Here is the contents of $RESULTS
echo -----------------------------------------
cat $RESULTS 
echo -----------------------------------------
echo End $RESULTS
echo There should be at least 5 lines in $RESULTS.
echo Here is how many we found:
wc -l $RESULTS
