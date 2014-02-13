#! /usr/bin/env python

# Title: MarkdownToHtml
# Author: Charlie Calvert

import os
import subprocess
import elfutils.elffiles as elffiles
import elfutils.ReplaceStringInFile as ReplaceStringInFile
from MakeHeadings import FindHeadings
import crlf

class MarkdownToHtml:

	def __init__(self):
		self.batchFile = os.environ['GIT_WRITING'] + "Tech\\Scripts\\ConvertMarkdownToHtml02.bat"
	
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination
		elffiles.ensuredir(self.destination)
		
	def getTemplateFile(self, fileName):
		templateDir = os.environ['GIT_WRITING'] + '{0}Tech{0}Scripts{0}Templates'.format(os.sep)
		return elffiles.getFileContent(templateDir + os.sep + fileName)
		
	def makeHeadings(self, sourceFolder, fileName):
		makeHeadings = FindHeadings()
		sourceName = "{0}{1}{2}".format(sourceFolder, os.sep, fileName);
		return makeHeadings.parseReplace(sourceName)
		
	def runPandoc(self, sourceFolder, fileName):
		cmd = 'Pandoc -t HTML5 --output={0}{1}{2}.htm {0}{1}{2}.md'
		cmd = cmd.format(sourceFolder, os.sep, fileName)
		return subprocess.check_call(cmd, shell=False)
		
	def createFullHtml(self, sourceFolder, fileName, targetFolder):
		self.runPandoc(sourceFolder, fileName)
		headings = self.makeHeadings(sourceFolder, fileName + '.htm')
		data = self.getTemplateFile('StartBasic.html')
		data += self.getTemplateFile('NavBasic.html')
		baseName = sourceFolder + os.sep + fileName;
		tempName = sourceFolder + os.sep + "Temp.html"
		data += elffiles.getFileContent(baseName + '.htm')
		data += self.getTemplateFile('Footer.html')
		data += self.getTemplateFile('End.html')
		finalName = baseName + '.html';
		elffiles.saveTextFile(tempName, data);
		ReplaceStringInFile.replaceIt(tempName, finalName, 'TempTitleStringToReplace', fileName)
		crlf.convert(finalName)
		
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
