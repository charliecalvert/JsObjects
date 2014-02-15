#!/bin/python

import re
import sys

class FindHeadings():
	regEx = '<h\d\sid="([^"]*)">([^<]*)'
	errorString = 'error'

	def openFile(self, fileName):
		f = open(fileName, 'r', encoding="utf8")
		fileContent = f.read()
		f.close()
		return fileContent
		
	def getInput(self):
		if len(sys.argv) == 1:
			return self.errorString
		else:
			return sys.argv[1]
			
	def parseReplace(self, fileName):
		if fileName != self.errorString:
			contents = self.openFile(fileName)
			results = re.findall(self.regEx, contents, re.DOTALL)
			fileContent = '<h2>Table of Contents</h2>\n'
			fileContent += '<ul>\n'
			for result in results:
				fileContent += "\t<li><a href='#" + result[0] + "'>" + result[1] + "</a></li>\n"
			fileContent += '</ul>\n'
			return fileContent
		else:
			return 'pass in the name of the file you want to parse'
			
#p = FindHeadings()
#p.parseReplace()
