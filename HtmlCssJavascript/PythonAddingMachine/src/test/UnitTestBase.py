#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import unittest
from TestField import TestField
from AddingMachineWrite import AddingMachineWrite

class UnitTestBase(unittest.TestCase):
    
    def setUp(self):             
        self.fields = { "operanda": TestField("2"), 
                        "operandb": TestField("3"),
                        "answer": TestField("5") }                   

    def setUpMock(self, MockClass):    
        instance = MockClass.return_value
        instance.__getitem__ = lambda s, key: self.fields[key]
        instance.__contains__ = lambda s, key: key in self.fields
        instance.has_key = lambda key: key in self.fields        
        self.addingMachine = AddingMachineWrite(False) 
