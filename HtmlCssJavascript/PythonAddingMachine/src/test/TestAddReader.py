#!/usr/bin/python
'''
Created on May 24, 2012

@author: Charlie
'''
import unittest
from AddingMachineRead import AddingMachineRead
from MyHtmlParser import MyHtmlParser

class TestAddReader(unittest.TestCase):

    def setUp(self):
        unittest.TestCase.setUp(self)
        self.addingMachine = AddingMachineRead()

    # Can we create an instance of the object we want to test.
    # __module__ returns the name of the file where the object
    # is declared
    def testCreate(self):                       
        self.assertEqual(self.addingMachine.__module__, 
                         'AddingMachineRead', 
                         'Could not create object')        

    def testGetHeader(self):        
        header = self.addingMachine.getHeader()
        self.assertTrue(header.startswith('Content-Type: text/html'))
        
    def testGetStart(self):
        start = self.addingMachine.getStart()        
        self.assertTrue(start.startswith('<!DOCTYPE html>\n<html>'), 'Begins with: {0}'.format(start))
        
    def testreadFileBegin(self):
        text = self.addingMachine.readFile("AddingMachine.csv")
        text = text.strip()
        self.assertTrue(text.startswith("<p>The sum of"), "Begins with: {0}".format(text))
        
    def testreadFileEnd(self):
        text = self.addingMachine.readFile("AddingMachine.csv")
        text = text.strip()
        self.assertTrue(text.endswith("and 3 is 5</p>"), "Ends with: {0}".format(text))
        
    def testRun(self):
        text = self.addingMachine.run("AddingMachine.csv")
        text = text.strip()
        self.assertTrue(text.endswith("</html>"), "File ends with: {0}".format(text))
        
    def testHtml(self):
        text = self.addingMachine.run("AddingMachine.csv")
        parse = MyHtmlParser()
        parse.feed(text)
        lines = parse.allParagraphText.splitlines()
        lineCount = lines.count("The sum of 1 and 2 is 3")        
        self.assertEqual(lineCount, 1, "Bad sums".format("Line count: {0}".format(lineCount)))
            
if __name__ == "__main__":    
    unittest.main()