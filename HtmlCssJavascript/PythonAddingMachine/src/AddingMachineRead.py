#!/usr/bin/python
'''
Create xml from a text file
@author: Charlie Calvert
@version: 1.0
'''

import csv
import cgitb
cgitb.enable()

class AddingMachineRead(object):
	
	def getHeader(self):
		return "Content-Type: text/html\n\n"
		
	def getStart(self):
		return """<!DOCTYPE html>\n<html>\n\
<head>
   <title>Read Adding Machine</title>
   <meta name='viewport' content='width=device-width,minimum-scale=1.0,maximum-scale=1.0' />
</head>
<body>
		
   <h3>Read Adding Machine</h3>
"""	
	
	def getEnd(self):
		return "\n</body>\n</html>"
		
	def readFile(self, fileName):
		xml = ''
		data = csv.reader(open(fileName))
		# Skip the headers at the top of the csv file
		data.next()
		for line in data:
			dataLine = 'The sum of ' + line[0] + ' and ' + line[1] + ' is ' + line[2] 		
			xml += "   <p>" + dataLine.strip() + "</p>\n"			
		return xml
	
	def run(self, fileName):	
		xml = self.getHeader()
		xml += self.getStart()
		xml += self.readFile(fileName)
		xml += self.getEnd()
		return xml	

if __name__ == "__main__":
	addMachine = AddingMachineRead()
	xml = addMachine.run("AddingMachine.csv")
	print xml