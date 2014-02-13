#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie Calvert
'''
import unittest
from TestField import TestField

class MockCgiBase(unittest.TestCase):
    """
    You should override defineFields() and setupBaseClass()
    Remember, all methods in Python are virtual, so you 
    simply redeclare the method to override. No keywords 
    are needed.
    @attention: At the start of each test method, call setUpMock
    @see: elfutils.tests.TestMockCgi.py
    """
       
    def setUp(self):             
        self.fields = self.defineFields()                    

    def defineFields(self):
        # You should override this method with code similar to this:
        # return { "a": TestField("1"), "b": TestField("2) }            
        pass
    
    def setUpBaseClass(self):
        # You should override this method with code similar to this:
        # return MyClassToTest()
        pass
        
    def setUpMock(self, MockClass):    
        instance = MockClass.return_value
        instance.__getitem__ = lambda s, key: self.fields[key]
        instance.__contains__ = lambda s, key: key in self.fields
        instance.has_key = lambda key: key in self.fields
        instance.length = lambda key: len(self.fields)        
        self.classToTest = self.setUpBaseClass() 

    