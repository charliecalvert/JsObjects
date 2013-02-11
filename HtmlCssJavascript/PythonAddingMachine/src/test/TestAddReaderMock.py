#!/usr/bin/python
'''
Created on Jun 1, 2012

@author: Charlie
'''
import unittest
from mock import patch
from AddingMachineRead import AddingMachineRead

class simpleIter():
    
    def __init__(self, a):
        self.count = -1
        pass
    
    def __iter__(self):
        pass
    
    def next(self):
        self.count += 1
        if self.count == 3:
            raise StopIteration()
        data = [['1', '2', '3'],['2', '3', '5'],['3', '4', '7']]
        return data[self.count]
   
@patch('csv.reader') 
class TestAddReadMock(unittest.TestCase):

    def nextItem(self):
        return "operanda,operandb,answer"
    
    def setUpMock(self, MockClass):
        instance = MockClass.return_value
        instance.next = self.nextItem
        instance.__iter__ = simpleIter
        
    def testName(self, MockClass):
        self.setUpMock(MockClass)
        add = AddingMachineRead()
        xml = add.run('AddingMachine.csv')
        print xml


if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()