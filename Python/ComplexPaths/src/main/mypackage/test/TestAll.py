'''
Created on May 26, 2012

@author: Charlie
'''

import unittest
from main.MainModule01 import MainModule01
from TestMe import TestMe
from main.mypackage.MyPackageMod01 import MyPackageMod01

class TestAll(unittest.TestCase):
    
    def testCallingTestMe(self):        
        t = TestMe()
        print t.__class__
        mod = t.__module__
        self.assertEqual(mod, 'main.mypackage.test.TestMe')
        
    def testCallingMainModule01(self):
        m = MainModule01()
        print m.__class__
        mod = m.__module__
        self.assertEqual(mod, 'main.MainModule01')
        
    def testCallingMyPackageMod01(self):    
        p = MyPackageMod01()        
        print p.__class__
        mod = p.__module__
        self.assertEqual(mod, 'main.mypackage.MyPackageMod01')