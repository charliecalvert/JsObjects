#!/bin/python

import re

class ParseFile():
	regEx = '<p>(.*?)<\/p>'

	def openFile(self):
		f = open('C:/Users/Charlie/Documents/Temp/regex/MediaWiki.html', 'r')
		return f.read()

	def replace(self, m):		
		result = re.sub('^\s*', '', m.group(0), flags=re.DOTALL)
		result = re.sub('\s+', ' ', result, flags=re.DOTALL)
		result = re.sub('\n', '', result, flags=re.DOTALL)	
		return result
            
	def parseReplace(self):
		contents = self.openFile()
		result = re.sub(self.regEx, self.replace, contents, flags=re.DOTALL)
		print result;
			
p = ParseFile()
p.parseReplace()