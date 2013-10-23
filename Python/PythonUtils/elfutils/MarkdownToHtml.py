import os
import subprocess
import elfutils.elffiles as elffiles

class MarkdownToHtml:

	def __init__(self):
		self.batchFile = os.environ['GIT_WRITING'] + "Tech\\Scripts\\ConvertMarkdownToHtml02.bat"
	
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination
		elffiles.ensuredir(self.destination)

	def run(self, fileToParse):		
		param = " " + self.copyFrom + " " + fileToParse + " " + self.destination
		print(self.batchFile)
		print("Calling SubProcess: " + param)
		subprocess.call(self.batchFile + param, shell=True)
		print("End Batch Call")
		#print(result)

	def runner(self, files):
		for file in files:
			self.run(file);
