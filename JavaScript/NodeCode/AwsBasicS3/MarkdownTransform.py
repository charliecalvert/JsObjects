#! /usr/bin/env python3.3

import os
import sys, argparse
import json
import elfutils.elffiles as elfFiles
from elfutils.MarkdownToHtml import MarkdownToHtml


# Site Root
# You may need to change the stackEditFrom path depending on your setup
normalHtml = 0
revealHtml = 1


# process and Copy the files
def makeItSo(markdown, folder, files, htmlPieces, technique = normalHtml):
	elfFiles.ensureDir(markdown.destination)
	if technique == revealHtml:
		markdown.runReveal(files);
	else:
		markdown.runner(files, htmlPieces);



# Prog280
# "MarkdownTransformConfig.json"
def prog280(markdown, index, markdownTransformConfig):
	# Read in JSON as a String. Convert the string to a Python List.
	# The first item in our list is a Python dictionary.	
	content = elfFiles.getFileContent(markdownTransformConfig);	
	configList = json.loads(content);	
	configDictionary = configList[index];	
	
	# The dictionary contains copyTo and copyFrom
	markdown.copyFrom = configDictionary['copyFrom'];
	markdown.destination = configDictionary['copyTo'];
	files = configDictionary['filesToCopy'];
	htmlPieces = configDictionary['htmlPieces'];
	makeItSo(markdown, "", files, htmlPieces);

def main(argv):
   index = 0;   
   parser = argparse.ArgumentParser()
   parser.add_argument('-i', '--index')
   parser.add_argument('-m', '--markdownTransformConfig')
   parser.add_argument('-v', dest='verbose', action='store_true')
   args = parser.parse_args()   
   print("The markdownTransformConfig file is: ", args.markdownTransformConfig)
   print('The Index is', args.index)
   markdown = MarkdownToHtml()
   prog280(markdown, int(args.index), args.markdownTransformConfig)
   
if __name__ == "__main__":
   main(sys.argv[1:])	
   
