import os
import unittest
from elfutils.MarkdownToHtml import MarkdownToHtml


class TestFileOperations(unittest.TestCase):
	
	
	def testRunPanDoc(self):
		markdown = MarkdownToHtml()
		actual = markdown.runPandoc('.', 'TestMe', 'C:\Temp')
		expected = 0
		self.assertEqual(actual, expected)
		
	def testMakeHeadings(self):
		markdown = MarkdownToHtml()
		fileContent = markdown.makeHeadings(os.getcwd(), "TestMe.htm")
		self.assertEqual(len(fileContent), 114)
		
if __name__ == '__main__':
	unittest.main()