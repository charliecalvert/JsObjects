#!/bin/python

import re
import sys

class FindHeadings():
	regEx = ['<h\d\sid="([^"]*)">([^<]*)', 
		'<section\sid="([^"]*)"\sclass=(\"level\d\")>']
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
				
	def parseReplaceHtml(self, fileName, technique):		
		if fileName != self.errorString:
			contents = self.openFile(fileName)			
			results = re.findall(self.regEx[technique], contents, re.DOTALL)
			fileContent = '<h2>Table of Contents</h2>\n'
			fileContent += '<ul class="elfTocHeading">\n'
			for result in results:				
				if technique == 0:
					indexTwo = 1
				else:
					indexTwo = 0
				fileContent += "\t<li><a href='#" + result[0] + "'>" + result[indexTwo] + "</a></li>\n"
			fileContent += '</ul>\n'
			return fileContent
		else:
			return 'pass in the name of the file you want to parse'
			
	# Not finished
	def parseReplaceMarkdown(self, fileName):
		if fileName != self.errorString:
			contents = self.openFile(fileName)
			results = re.findall(self.regEx[1], contents, re.DOTALL)
			fileContent = '## Table of Contents\n'
			for result in results:
				fileContent += '[' + result[0] + '](#' + result[0] + "]"
			return fileContent
		else:
			return 'pass in the name of the file you want to parse'
			
#p = FindHeadings()
#p.parseReplace()
