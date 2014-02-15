#! /usr/bin/env python3.3

# Title: MarkdownToHtml
# Author: Charlie Calvert

import os
import subprocess
import elfutils.elffiles as elfFiles
import elfutils.ReplaceStringInFile as ReplaceStringInFile
from RegEx.MakeHeadings import FindHeadings
import crlf

class MarkdownToHtml:

	def __init__(self):
		self.templateDir = elfFiles.ensureFinalSlash(os.environ['JSOBJECTS']) + 'Utilities{0}Templates'.format(os.sep)
		self.templateNames = ['StartBasic.html', 'NavBasic.html', 'footer.html', 'end.html']
		
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination
		elfFiles.ensuredir(self.destination)
		
	def getTemplateFile(self, fileName):
		#templateDir = os.environ['GIT_WRITING'] + 'Tech{0}Scripts{0}Templates'.format(os.sep)
		return elfFiles.getFileContent(self.templateDir + os.sep + fileName)
		
	def makeHeadings(self, sourceFolder, fileName):
		makeHeadings = FindHeadings()
		sourceName = "{0}{1}{2}".format(sourceFolder, os.sep, fileName);
		return makeHeadings.parseReplace(sourceName)
		
	def runPandoc(self, sourceFolder, fileName):
		cmd = 'pandoc -t HTML5 --output={0}{1}{2}.htm {0}{1}{2}.md'
		cmd = cmd.format(sourceFolder, os.sep, fileName)
		return subprocess.check_call(cmd, shell=True)

	def concatFiles(self, baseName, headings):		
		data = self.getTemplateFile(self.templateNames[0])
		data += self.getTemplateFile(self.templateNames[1])
		data += headings;
		data += elfFiles.getFileContent(baseName + '.htm')
		data += self.getTemplateFile(self.templateNames[2])
		data += self.getTemplateFile(self.templateNames[3])
		return data;
		
	def createFullHtml(self, sourceFolder, fileName, targetFolder):
		sourceFolder = elfFiles.ensureFinalSlash(sourceFolder);
		self.runPandoc(sourceFolder, fileName)
		headings = self.makeHeadings(sourceFolder, fileName + '.htm')
		baseName = sourceFolder + fileName;
		data = self.concatFiles(baseName, headings)	
		tempName = sourceFolder + "Temp.html"
		elfFiles.saveTextFile(tempName, data);
		finalName = baseName + '.html';
		ReplaceStringInFile.replaceIt(tempName, finalName, 'TempTitleStringToReplace', fileName)
		crlf.convert(finalName)
		elfFiles.copyFile(finalName, elfFiles.ensureFinalSlash(targetFolder) + fileName + '.html') 
		
	def run(self, fileToParse):		
		#param = " " + self.copyFrom + " " + fileToParse + " " + self.destination

		#print(self.batchFile)
		#print("Calling SubProcess: " + param)
		#subprocess.call(self.batchFile + param, shell=True)
		print("End Batch Call")
		#print(result)

	def runner(self, files, templateNames):
		if len(templateNames) > 0:
			self.templateNames = templateNames;
		for fileName in files:
			self.createFullHtml(self.copyFrom, fileName, self.destination);
			#self.run(file);
