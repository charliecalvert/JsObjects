'''
Created on May 26, 2012

@author: Charlie
'''

import unittest
import MainModule01
import TestMe
import MyPackageMod01

class TestAll(unittest.TestCase):
    
    def testCallingTestMe(self):        
        t = TestMe.TestMe()
        print t.__class__
        mod = t.__module__
        self.assertEqual(mod, 'main.mypackage.test.TestMe')
        
    def testCallingMainModule01(self):
        m = MainModule01.MainModule01()
        print m.__class__
        mod = m.__module__
        self.assertEqual(mod, 'MainModule01')
        
    def testCallingMyPackageMod01(self):    
        p = MyPackageMod01.MyPackageMod01()        
        print p.__class__
        mod = p.__module__
        self.assertEqual(mod, 'MyPackageMod01')