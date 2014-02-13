#! /usr/bin/env python

# Title: MarkdownToHtml
# Author: Charlie Calvert

import os
import unittest
from elfutils.MarkdownToHtml import MarkdownToHtml
import elfutils.elffiles as elffiles

class TestFileOperations(unittest.TestCase):
	
	def testRunPanDoc(self):
		markdown = MarkdownToHtml()
		actual = markdown.runPandoc('.', 'TestMe')
		expected = 0
		self.assertEqual(actual, expected)
		
	def testMakeHeadings(self):
		markdown = MarkdownToHtml()
		fileContent = markdown.makeHeadings(os.getcwd(), "TestMe.htm")
		self.assertEqual(len(fileContent), 114)
		
	def testGetTemplateFile(self):
		markdown = MarkdownToHtml()
		fileContent = markdown.getTemplateFile('StartBasic.html');
		self.assertEqual(len(fileContent), 887)
		
	def testCreateFullHtml(self):
		markdown = MarkdownToHtml()
		fileName = 'TestMe'
		markdown.createFullHtml(os.getcwd(), fileName, elffiles.getHomeDir() + os.sep + 'Temp')
		# Need to set up PythonPath for root to make this work.
		#fileName += '.html'
		#elffiles.copyFile(os.getcwd(), fileName, '/var/www/' + fileName);
		
if __name__ == '__main__':
	unittest.main()
