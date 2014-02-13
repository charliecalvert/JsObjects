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
		self.assertEqual(len(fileContent), 884)
		
	def testCreateFullHtml(self):
		markdown = MarkdownToHtml()
		markdown.createFullHtml(os.getcwd(), 'TestMe', elffiles.getHomeDir() + os.sep + 'Temp')
		
if __name__ == '__main__':
	unittest.main()
