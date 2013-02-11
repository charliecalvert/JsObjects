#!/usr/bin/python
'''
Created on May 25, 2012

@author: Charlie
'''

import unittest
from AddingMachineWrite import AddingMachineWrite

class TestAddWriter(unittest.TestCase):


    def setUp(self):
        self.addingMachine = AddingMachineWrite()


    def tearDown(self):
        pass


    def testCreate(self):
        module = self.addingMachine.__module__
        self.assertEqual(module, "AddingMachineWrite", "Could not create class")

    def testGetHeader(self):        
        header = self.addingMachine.getHeader()
        self.assertTrue(header.startswith('Content-Type: text/html'))
        
    def testGetStart(self):
        start = self.addingMachine.getStart()        
        self.assertTrue(start.startswith('<!DOCTYPE html>\n<html>'), 'Begins with: {0}'.format(start))
        
    def testGetClose(self):
        text = self.addingMachine.getClose()
        text = text.strip()
        self.assertTrue(text.startswith("</body>"), "Begins with: {0}".format(text))
        
if __name__ == "__main__":
    unittest.main()