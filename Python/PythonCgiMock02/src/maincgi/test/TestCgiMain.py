#!/usr/bin/python
'''
Created on May 22, 2012

@author: Charlie
'''
import unittest
from mock import patch
from maincgi import XmlExercise

class TestField(object):
    def __init__(self, value):
        self.value = value
        
@patch('cgi.FieldStorage')
class TestCgiMain(unittest.TestCase):
                  
    def setUp(self):             
        self.fields = { "rain": TestField("little"), "amount": TestField("One Inch") }                   

    def has_key(self, key):        
        return key in self.fields

    def setUpMock(self, MockClass):    
        instance = MockClass.return_value
        instance.__getitem__ = lambda s, key: self.fields[key]
        instance.__contains__ = lambda s, key: key in self.fields
        instance.has_key = lambda key: key in self.fields
        # instance.has_key = self.has_key
        self.xmlExercise = XmlExercise.XmlExercise() 

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