'''
Created on May 2, 2012

@author: Charlie
'''
import unittest
from calc.calculator import Calculator

class TestCalc(unittest.TestCase):
    
    def testAdd(self):
        calculator = Calculator()
        result = calculator.add(operanda=2, operandb=3)
        self.assertEqual(result, 5, "Not equal")

suite = unittest.TestLoader().loadTestsFromTestCase(TestCalc)
unittest.TextTestRunner(verbosity=2).run(suite)   