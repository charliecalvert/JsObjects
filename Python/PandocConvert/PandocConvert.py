#!/bin/python

import os, fnmatch
from subprocess import call

class RunPandoc():

	def runPandoc(self, fileName):
		pandoc="C:\\Program Files (x86)\\Pandoc\\bin\\pandoc.exe"
		paramData={"fileName": fileName, "ext1":"md", "ext2":"html"}
		markdownName="%(fileName)s.%(ext1)s" % paramData
		htmlName="%(fileName)s.%(ext2)s" % paramData
		call([pandoc, "-f", "html", "-t", "markdown", "-o", markdownName, htmlName])

	def locate(self, pattern, excludes, root=os.curdir):
		'''Locate all files matching supplied filename pattern in and below
		supplied root directory.'''
		for path, dirs, files in os.walk(os.path.abspath(root)):
			dirs[:] = [d for d in dirs if d not in excludes] 
			for filename in fnmatch.filter(files, pattern):
				yield os.path.join(path, filename)
	
	def findFile(self, pattern, excludes):
		for fileName in self.locate(pattern, excludes):
			name = os.path.basename(fileName).split(".")[0]
			self.runPandoc(name)

# find all the files in the current directory that have
# an extension of html and don't have _vti_cnf as part
# of their path
r = RunPandoc()
r.findFile("*.html", ['_vti_cnf'])
