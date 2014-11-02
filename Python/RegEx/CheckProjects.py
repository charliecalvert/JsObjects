#!/bin/python

# Put this script in the root of your repository
# Run it like this: python3 CheckProjects
# See the two options at bottom of this file

import re
import sys
import os

class FindProjects():
	errorString = 'error'
	studentDirs = []
	projectNames = []

	def hasProject(self, file):
		return '.project' in file
			
	def findFiles(self, start):
		allProjects = []
		for root, dirs, files in os.walk(start):
			path = root.split('/')
			if ('node_modules' not in root):
				for file in files:
					if ('.project' in file):						
						allProjects.append(root + '/' + file)						
		return allProjects

	def openFile(self, fileName):
		f = open(fileName, 'r', encoding="utf8")
		fileContent = f.read()
		f.close()
		return fileContent
				

	def checkResults(self, projectNames):
		for projectName in projectNames:			
			if (projectNames.count(projectName) > 1):
				print("Error: ", projectName)


	# Charlie uses checkForStudentDir to check if a new 
	# student repository has been found. Should be false
	# for everyone else. It is set at the bottom of file.
	def parseProject(self, fileName, checkForStudentDir):		
		if fileName != self.errorString:
			contents = self.openFile(fileName)			
			if checkForStudentDir:
				data = re.findall('isit320[^\\\]*', fileName)
				if self.studentDirs.count(data) == 0:
					self.checkResults(self.projectNames)
					self.studentDirs.append(data)
					print("====================")
					print("--> ", data[0])
					print("====================")					
					del self.projectNames[:]
			results = re.findall('Description.\s+<name>([^<]*)', contents, re.DOTALL)
			self.projectNames.append(results)
			print(results)		

	def parseAllProjects(self, searchPath, checkForStudentDir):
		allProjects = self.findFiles(".")
		for file in allProjects:
			self.parseProject(file, checkForStudentDir)
		self.checkResults(self.projectNames)

p = FindProjects()
# Setting searchPath to "." specifies that you want
# to check all the projects in this repository 
searchPath = "."
# Set checkForStudentDir to False unless you are Charlie
checkForStudentDir = False
p.parseAllProjects(searchPath, checkForStudentDir)
