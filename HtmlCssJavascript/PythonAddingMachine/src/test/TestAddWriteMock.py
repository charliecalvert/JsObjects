#!/usr/bin/python
'''
Created on May 25, 2012

@author: Charlie
'''
import unittest
from mock import patch
from UnitTestBase import UnitTestBase
from MyHtmlParser import MyHtmlParser
        
@patch('cgi.FieldStorage')
class TestAddWriterMock(UnitTestBase):
   
    def testGeneratesHtml(self, MockClass):
        self.setUpMock(MockClass)
        html = self.addingMachine.main()
        self.assertTrue(html.startswith("<!DOCTYPE"), "starts with: {0}".format(html))

    def testRows(self, MockClass):
        self.setUpMock(MockClass)
        html = self.addingMachine.main()               
        p = MyHtmlParser()        
        p.feed(html)           
        self.assertEqual(p.allParagraphText.strip(), 
            "The sum of 2 and 3 is 5", "got {0}".format(p.allParagraphText))

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()