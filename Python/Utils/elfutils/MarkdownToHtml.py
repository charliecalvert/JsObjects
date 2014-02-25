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
		self.normalHtml = 0;
		self.revealHtml = 1;
		
	def setData(self, copyFrom, destination):
		self.copyFrom=copyFrom
		self.destination=destination
		elfFiles.ensuredir(self.destination)
		
	def getTemplateFile(self, fileName):
		#templateDir = os.environ['GIT_WRITING'] + 'Tech{0}Scripts{0}Templates'.format(os.sep)
		return elfFiles.getFileContent(self.templateDir + os.sep + fileName)
		
	def makeHeadings(self, sourceFolder, fileName, technique):
		print("Call makeHeadings")
		makeHeadings = FindHeadings()
		sourceName = "{0}{1}".format(sourceFolder, fileName);
		return makeHeadings.parseReplaceHtml(sourceName, technique)
		
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
		
	def createFullHtml(self, sourceFolder, fileName, targetFolder, technique):
		sourceFolder = elfFiles.ensureFinalSlash(sourceFolder)
		self.runPandoc(sourceFolder, fileName)
		headings = self.makeHeadings(sourceFolder, fileName + '.htm', technique)
		baseName = sourceFolder + fileName;
		data = self.concatFiles(baseName, headings)	
		tempName = sourceFolder + "Temp.html"
		elfFiles.saveTextFile(tempName, data);
		finalName = baseName + '.html';
		ReplaceStringInFile.replaceIt(tempName, finalName, 'TempTitleStringToReplace', fileName)
		crlf.convert(finalName)
		elfFiles.copyFile(finalName, elfFiles.ensureFinalSlash(targetFolder) + fileName + '.html') 

	def runPandocReveal(self, sourceFolder, fileName):
		cmd = 'pandoc --section-divs -t html5 -s --template {2} --output={0}{1}.htm {0}{1}.md'
		
		# reveal = self.getTemplateFile('template.revealjs');
		reveal = elfFiles.ensureFinalSlash(self.templateDir) + 'template.revealjs';
		cmd = cmd.format(sourceFolder, fileName, reveal)
		# print(cmd)
		return subprocess.check_call(cmd, shell=True)

	def createTempMarkdown(self, sourceFolder, fileName, headings):
		sourceFolder = elfFiles.ensureFinalSlash(sourceFolder)
		origName = '{0}{1}.md'.format(sourceFolder, fileName);
		tempName = 'temp'
		tempPath = '{0}{1}.md'.format(sourceFolder, tempName);
		# data = '## toc\n'
		data = elfFiles.getFileContent(origName)
		# print(tempPath)
		elfFiles.saveTextFile(tempPath, data)
		return tempName

	def createReveal(self, sourceFolder, fileName, targetFolder, technique):
		sourceFolder = elfFiles.ensureFinalSlash(sourceFolder);		
		#tempName = self.createTempMarkdown(sourceFolder, fileName, headings)
		self.runPandocReveal(sourceFolder, fileName)
		headings = self.makeHeadings(sourceFolder, fileName + '.htm', technique)		
		baseName = sourceFolder + fileName;
		#data = elfFiles.getFileContent(baseName + '.htm')
		tempName = sourceFolder + fileName + ".htm"
		skipName = sourceFolder + "temp01.htm"
		#elfFiles.saveTextFile(tempName, data);
		finalName = baseName + '.html';
		replaceString = '<section id="toc" class="level2">'
		ReplaceStringInFile.replaceIt(tempName, skipName, 'toc', headings)
		ReplaceStringInFile.replaceIt(skipName, finalName, 'TempTitleStringToReplace', fileName)
		crlf.convert(finalName)
		elfFiles.copyFile(finalName, elfFiles.ensureFinalSlash(targetFolder) + fileName + '.html') 

	def runReveal(self, files):
		for fileName in files:
			self.createReveal(self.copyFrom, fileName, self.destination, self.revealHtml);

	def runner(self, files, templateNames):
		if len(templateNames) > 0:
			self.templateNames = templateNames;
		for fileName in files:
			self.createFullHtml(self.copyFrom, fileName, self.destination, self.normalHtml);
			#self.run(file);
