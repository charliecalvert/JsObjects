#!/usr/bin/python
'''
Created on May 22, 2012

@author: Charlie
'''
import unittest
from mock import patch
from maincgi.test.TestCgiMainBase import TestCgiMainBase
       
@patch('cgi.FieldStorage')
class TestCgiMain(TestCgiMainBase):
                  
    def testHasRain(self, MockClass):
        self.setUpMock(MockClass)                        
        self.assertTrue(self.xmlExercise.hasRain())
        
    def testRainIn(self, MockClass):        
        self.setUpMock(MockClass)                
        self.assertTrue(self.xmlExercise.rainIn())
        
    def testHasKey(self, MockClass):
        self.setUpMock(MockClass)                        
        self.assertTrue(self.xmlExercise.hasKey("rain"))
        self.assertFalse(self.xmlExercise.hasKey("ran"))
        
    def testKeyIn(self, MockClass):        
        self.setUpMock(MockClass)                
        self.assertTrue(self.xmlExercise.keyIn("rain"))
        self.assertFalse(self.xmlExercise.keyIn("ran"))
       
if __name__ == "__main__":    
    unittest.main()