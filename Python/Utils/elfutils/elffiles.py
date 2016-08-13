'''
Created on May 27, 2012

@author: Charlie
'''

import sys
import os
import shutil
import configparser
from os.path import expanduser

def getFileContent(fileName):
	f = open(fileName, 'r', encoding="utf8")
	fileContent = f.read()
	f.close()
	return fileContent
	
def saveTextFile(fileName, content):
	f = open(fileName, 'w', encoding="utf8")
	f.write(content)
	f.close()
	
def getHomeDir():
	# return os.environ['HOME']
	return expanduser("~")
	
def copyFile(srcFile, destFile):
	if os.path.exists(srcFile):
		shutil.copy2(srcFile, destFile);

def copyFiles(pathName, srcDir, files, verbose):
	ensureDir(pathName)
	for fileName in files:
		if fileName.startswith(os.sep):
			fileName = fileName[1:]
		dest = os.path.join(pathName, fileName)
		(destPath, file) = os.path.split(dest)
		ensureDir(destPath)
		srcFile = os.path.join(srcDir, fileName)
		if os.path.exists(srcFile):
			shutil.copy2(srcFile, dest);
			if verbose == True:
				print(dest)
		else:
			print("Could not find {0}".format(srcFile))

def setPermissions(pathName, files, verbose=False):
	for fileName in files:
		dest = os.path.join(pathName + fileName)
		if os.path.exists(dest):
			# status = os.stat(dest)
			if dest.endswith(".txt"):
				os.chmod(dest, stat.S_IREAD | stat.S_IWRITE)
			else:
				os.chmod(dest, stat.S_IRWXU | stat.S_IRWXG | stat.S_IROTH)
		else:
			print("Could not set permissions for: {0}".format(dest))

def ensureFinalSlash(pathName):
	os.pathsep
	if pathName[len(pathName)-1] != os.sep:
		return pathName + os.sep
	else:
		return pathName
		
def ensureDir(pathName):
	if not os.path.exists(pathName):
		os.makedirs(pathName)

#remove directory, subdirectories and contents of the directories
def removeDirs(pathName):
	shutil.rmtree(pathName)

def getFilesFromExtensions(startPath, extensions, includeRoot = True):
	# Extensions is a simple extension like this: '*.jpg'
	fileNames = []
	path = os.path.abspath(startPath)
	for root, dirs, files in os.walk(path):
		print('Found ' + str(len(files)) + ' files')
		for fileName in files:
			extension = os.path.splitext(fileName)[1]
			if extension in extensions:
				if includeRoot == True:
					baseRoot = root.replace(startPath, "")
					fName = os.path.join(baseRoot, fileName)
					fileNames.append(fName)
				else:
					fileNames.append(fileName)
		if "_vti_cnf" in dirs:
			dirs.remove("_vti_cnf")
		if "_vti_pvt" in dirs:
			dirs.remove("_vti_pvt")
	return fileNames

class CopyFilesBase(object):

	def __init__(self):
		self.srcDir = os.getcwd();

	def setUpDestination(self, htmlLocation, cgiLocation):
		self.htmlDest = self.config.get("Paths", htmlLocation) + self.projectName
		self.cgiDest = self.config.get("Paths", cgiLocation) + self.projectName

	def setUpFileNames(self, htmlExtensions, cgiExtensions, imageExtensions, includeRoot):
		self.htmlFiles = getFilesFromExtensions(os.getcwd(), htmlExtensions, includeRoot)
		self.cgiFiles = getFilesFromExtensions(os.getcwd(), cgiExtensions, includeRoot)
		self.imageFiles = getFilesFromExtensions(os.getcwd(), imageExtensions, includeRoot)

	def copyFiles(self, verbose):
		"Execute this method only if htmlDest has been set up"
		if hasattr(self, 'htmlDest'):
			copyFiles(self.htmlDest, self.srcDir, self.htmlFiles,  verbose)
			copyFiles(self.cgiDest, self.scriptPath, self.cgiFiles,  verbose)
			copyFiles(self.htmlDest, self.srcDir, self.imageFiles,  verbose)
			setPermissions(self.cgiDest, self.cgiFiles, verbose)

class CopyFilesBasePredefined(CopyFilesBase):

	WINDOWS = 0
	LINUX = 1
	STANDARD = 0

	def __init__(self, includeRoot=False, configPath="../../Deploy.config",
				 choiceFiles=STANDARD,
				 choiceOs=-1):
		super(CopyFilesBasePredefined, self).__init__()
		if (choiceOs == -1):
			arg = self.doArgs()
			if arg == -1:
				return
			elif arg == '0':
				choiceOs = CopyFilesBasePredefined.WINDOWS
			elif arg == '1':
				choiceOs = CopyFilesBasePredefined.LINUX
			else:
				return
		if choiceOs == self.WINDOWS:
			self.locations = ["winSitePath", "winCgi"]
		elif choiceOs == self.LINUX:
			self.locations = ["linuxSitePath", "linuxCgi"]
		if choiceFiles == self.STANDARD:
			self.extensions = [[".html", ".css", ".js"], [".py", ".csv", ".txt"], [".png", ".jpg", ".bmp"]]
		self.setUpCore(configPath, includeRoot)
		self.fineTune()

	def setUpCore(self, configPath, includeRoot):
		self.config = ConfigParser.RawConfigParser()
		self.config.read(configPath)
		self.setUpDestination()
		self.setUpFileNames(includeRoot)

	def setUpDestination(self):
		CopyFilesBase.setUpDestination(self, self.locations[0], self.locations[1])

	def setUpFileNames(self, includeRoot):
		CopyFilesBase.setUpFileNames(self, self.extensions[0], self.extensions[1], self.extensions[2], includeRoot)

	def doArgs(self):
		if len(sys.argv) > 1:
			return sys.argv[1]
		else:
			print('''Usage:
	Deploy.py [arg]
	arg can be:
		0: Windows
		1: Linux
	Example:
		python Deploy.py 0''')
		return -1
