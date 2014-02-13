import os
import subprocess
import elfutils.elffiles as elffiles
from MakeHeadings import FindHeadings

class MarkdownToHtml:

	def __init__(self):
		self.batchFile = os.environ['GIT_WRITING'] + "Tech\\Scripts\\ConvertMarkdownToHtml02.bat"
	
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination
		elffiles.ensuredir(self.destination)
		
	def makeHeadings(self, sourceFolder, fileName):
		makeHeadings = FindHeadings()
		sourceName = "{0}{1}{2}".format(sourceFolder, os.sep, fileName);
		return makeHeadings.parseReplace(sourceName)
		
	def runPandoc(self, sourceFolder, fileName, targetFolder):
		cmd = 'Pandoc -t HTML5 --output={0}{1}{2}.htm {0}{1}{2}.md'
		cmd = cmd.format(sourceFolder, os.sep, fileName)
		return subprocess.check_call(cmd, shell=False)

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
