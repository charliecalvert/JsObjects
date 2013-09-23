import os
import subprocess

class MarkdownToHtml:

	def __init__(self):
		self.batchFile= os.environ['GIT_WRITING'] + "Tech\\Scripts\\ConvertMarkdownToHtml02.bat"
	
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination

	def run(self, fileToParse):			
		param = " " + self.copyFrom + " " + fileToParse + " " + self.destination
		print "Calling SubProcess: " + fileToParse
		result = subprocess.check_output(self.batchFile + param)		
		print "End Batch Call"
		print result

	def runner(self, files):
		for file in files:
			self.run(file);
