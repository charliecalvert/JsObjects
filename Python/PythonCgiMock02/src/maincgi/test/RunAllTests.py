#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import unittest
import TestCgiMain
import FileTests

def defineSuite1():
    suite = unittest.TestSuite()
    suite.addTest(TestCgiMain("testHasKey"))
    return suite

def defineSuite2():
    suite1 = unittest.makeSuite(TestCgiMain.TestCgiMain, 'test')
    suite2 = unittest.makeSuite(FileTests.FileTests, 'test')
    return unittest.TestSuite((suite1, suite2))

suite = defineSuite2()
unittest.TextTestRunner(verbosity=3).run(suite)
