#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import unittest
from FileTests import FileTests
from TestAddReader import TestAddReader
from TestAddWriter import TestAddWriter
from TestAddWriteMock import TestAddWriterMock

def defineSuite():    
    suite1 = unittest.makeSuite(TestAddReader, 'test')
    suite2 = unittest.makeSuite(FileTests, 'test')
    suite3 = unittest.makeSuite(TestAddWriter, 'test')    
    suite4 = unittest.makeSuite(TestAddWriterMock, 'test')    
    return unittest.TestSuite((suite1, suite2, suite3, suite4))

fileName = "AddingMachine.txt"

file1 = open(fileName, "w")
file1.write("The sum of 1 and 2 is 3\nThe sum of 2 and 3 is 5\n")
file1.close()
suite = defineSuite()
unittest.TextTestRunner(verbosity=3).run(suite)
