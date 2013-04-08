#!/bin/python

import re
import sys

class FindHeadings():
	regEx = '<h\d\sid="([^"]*)">([^<]*)'
	errorString = 'error'

	def openFile(self, fileName):
		f = open(fileName, 'r')
		return f.read()
            
	def getInput(self):
		if len(sys.argv) == 1:
			return self.errorString
		else:
			return sys.argv[1]
			
	def parseReplace(self):
		arg = self.getInput()
		if arg != self.errorString:
			#contents = "BooFar"
			contents = self.openFile(arg)
			results = re.findall(self.regEx, contents, re.DOTALL)
			print '<ul>'
			for result in results:
				print "\t<li><a href='#" + result[0] + "'>" + result[1] + "</a></li>"
			print '</ul>'
		else:
			print 'pass in the name of the file you want to parse'
			
p = FindHeadings()
p.parseReplace()