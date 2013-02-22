#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import unittest
from mock import patch
import xml.etree.ElementTree as ET
from TestCgiMainBase import TestCgiMainBase

@patch('cgi.FieldStorage')
class TestCgiMainXml(TestCgiMainBase):

    def tearDown(self):
        pass

    def testName(self, MockClass):
        self.setUpMock(MockClass)
        xml = self.xmlExercise.valueOfRainCore()          
        tree = ET.XML(xml)        
        key = tree.find('has_rain1')
        test = key.text
        self.assertEqual(test, 'True')
        self.assertNotEqual(test, 'False')
        #self.assertEqual(len(items), 4, 'expected four items in list')

if __name__ == "__main__":    
    unittest.main()