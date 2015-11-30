#! /usr/bin/python

import sys
import os

print("Inserting jade and exec tasks into Gruntfile.js");

# If you want to replace more than first instance
multi_instance=False

path=os.environ.get('ELF_TEMPLATES')+'/UnitTest/'
main_filename = 'Gruntfile.js'
insertion_filename=path+'jade-exec-grunt.txt'
pattern="karma:"
temp_filename="tempfile.js"

fileToInsert=open(insertion_filename, 'r+')
mainFile=open(main_filename, 'r+')
tempFile=open(temp_filename, 'w+')

for line in mainFile:
	if pattern in line.strip():
		for line1 in fileToInsert:
			tempFile.write(line1);
		if multi_instance:
			insertion_filename.seek(0) 
	tempFile.write(line)

fileToInsert.close();
mainFile.close();
tempFile.close();
os.rename(temp_filename, main_filename)
