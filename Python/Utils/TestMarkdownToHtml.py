#! /usr/bin/env python3.3

# Title: TestMarkdownToHtml
# Author: Charlie Calvert

import os
import unittest
from elfutils.MarkdownToHtml import MarkdownToHtml
import elfutils.elffiles as elffiles

class TestFileOperations(unittest.TestCase):

	def __init__(self, *args, **kwargs):
		super(TestFileOperations, self).__init__(*args, **kwargs)
		self.normalHtml = 0
		self.revealHtml = 1

	def testRunPanDoc(self):
		markdown = MarkdownToHtml()
		actual = markdown.runPandoc('.', 'TestMe')
		expected = 0
		self.assertEqual(actual, expected)
		
	def testMakeHeadings(self):
		markdown = MarkdownToHtml()
		fileContent = markdown.makeHeadings(os.getcwd(), "TestMe.htm", self.normalHtml)
		self.assertEqual(len(fileContent), 114)
		
	def testGetTemplateFile(self):
		markdown = MarkdownToHtml()
		fileContent = markdown.getTemplateFile('StartBasic.html');
		self.assertEqual(len(fileContent), 887)
		
	def testCreateFullHtml(self):
		markdown = MarkdownToHtml()
		fileName = 'TestMe'
		markdown.createFullHtml(os.getcwd(), fileName, elffiles.getHomeDir() + os.sep + 'Temp', self.normalHtml)
		# Need to set up PythonPath for root to make this work.
		#fileName += '.html'
		#elffiles.copyFile(os.getcwd(), fileName, '/var/www/' + fileName);
		
if __name__ == '__main__':
	unittest.main()
