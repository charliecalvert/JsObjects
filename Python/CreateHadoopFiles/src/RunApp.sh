#!/bin/bash

HADOOP="/usr/local/hadoop/bin/hadoop"
echo $HADOOP
DFS=$HADOOP" dfs"
JAR=$HADOOP" jar"
GUTENBERG="/user/hadooper/gutenberg"
OUTPUT=$GUTENBERG"-output"

echo $DFS
$DFS -rmr $GUTENBERG
$DFS -rmr $OUTPUT
$DFS -copyFromLocal $HOME/gutenberg $GUTENBERG
$DFS -ls /user/hadooper
$DFS -ls $GUTENBERG

$JAR /usr/local/hadoop/hadoop-examples-1.0.1.jar wordcount $GUTENBERG $OUTPUT
read -p "Press [Enter] key to see the results"
/usr/local/hadoop/bin/hadoop dfs -cat /user/hadooper/gutenberg-output/part-r-00000
