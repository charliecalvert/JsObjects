#!/bin/python

import re
import sys

class ParseFile():
	regEx = '<p>(.*?)<\/p>'
	errorString = 'error'

	def openFile(self, fileName):
		f = open(fileName, 'r')
		return f.read()

	def replace(self, m):		
		result = re.sub('^\s*', '', m.group(0), flags=re.DOTALL)
		result = re.sub('\s+', ' ', result, flags=re.DOTALL)
		result = re.sub('\n', '', result, flags=re.DOTALL)	
		return result
            
	def getInput(self):
		if len(sys.argv) == 1:
			return self.errorString
		else:
			return sys.argv[1]
			
	def parseReplace(self):
		arg = self.getInput()
		if arg != self.errorString:
			contents = self.openFile(arg)
			result = re.sub(self.regEx, self.replace, contents, flags=re.DOTALL)
			print result;
		else:
			print 'pass in the name of the file you want to parse'
			
p = ParseFile()
p.parseReplace()