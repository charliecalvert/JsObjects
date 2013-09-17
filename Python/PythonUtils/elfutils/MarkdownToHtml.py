import os
import subprocess

class MarkdownToHtml:

	def __init__(self):
		self.batchFile="G:\\Src\\Git\\Writing\\Tech\\Scripts\\ConvertMarkdownToHtml02.bat"
	
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination

	def run(self, fileToParse):		
		param = " " + self.copyFrom + " " + fileToParse + " " + self.destination
		result = subprocess.check_output(self.batchFile + param)
		print result

	def runner(self, files):
		for file in files:
			self.run(file);
