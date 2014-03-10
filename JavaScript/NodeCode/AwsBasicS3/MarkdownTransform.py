#! /usr/bin/env python3.3

import os
import sys, getopt
import json
import elfutils.elffiles as elfFiles
from elfutils.MarkdownToHtml import MarkdownToHtml


# Site Root
# You may need to change the stackEditFrom path depending on your setup
normalHtml = 0
revealHtml = 1


# process and Copy the files
def makeItSo(markdown, folder, files, technique = normalHtml):
	elfFiles.ensureDir(markdown.destination)
	if technique == revealHtml:
		markdown.runReveal(files);
	else:
		markdown.runner(files, ['StartLinux.html', 'NavLinux.html', 'footer.html', 'end.html']);



# Prog270
def prog280(markdown, index):
	# Read in JSON as a String. Convert the string to a Python List.
	# The first item in our list is a Python dictionary.	
	content = elfFiles.getFileContent("MarkdownTransformConfig.json");	
	configList = json.loads(content);	
	configDictionary = configList[index];	
	
	# The dictionary contains copyTo and copyFrom
	markdown.copyFrom = configDictionary['copyFrom'];
	markdown.destination = configDictionary['copyTo'];
	files = configDictionary['filesToCopy'];
	makeItSo(markdown, "", files);

def main(argv):
   index = 0;   
   try:
      opts, args = getopt.getopt(argv,"hi:o:",["index="])
   except getopt.GetoptError:
      print('BuildAll.py -i index of item from MarkdownTransformConfig.json') 
      sys.exit(2)
   for opt, arg in opts:
      if opt == '-h':
         print('BuildAll.py -i <index>') 
         sys.exit()
      elif opt in ("-i", "--index"):
         index = arg
   print('The Index is', index)
   markdown = MarkdownToHtml()
   prog280(markdown, int(index))	
   
if __name__ == "__main__":
   main(sys.argv[1:])	
   
