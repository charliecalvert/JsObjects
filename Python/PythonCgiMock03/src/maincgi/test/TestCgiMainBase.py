#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import unittest
from TestField import TestField
from maincgi.XmlExercise import XmlExercise

class TestCgiMainBase(unittest.TestCase):
    
    def setUp(self):             
        self.fields = { "rain": TestField("little"), "amount": TestField("One Inch") }                   

    def has_key(self, key):
        return key in self.fields
    
    def setUpMock(self, MockClass):    
        instance = MockClass.return_value
        instance.__getitem__ = lambda s, key: self.fields[key]
        instance.__contains__ = lambda s, key: key in self.fields
        #instance.has_key = lambda key: key in self.fields
        instance.has_key = self.has_key
        self.xmlExercise = XmlExercise() 
