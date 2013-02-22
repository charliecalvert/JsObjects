'''
Created on May 1, 2012

@author: Charlie
'''
import unittest
from mock import patch
from CgiCode import MainCgi

@patch('cgi.FieldStorage')

class TestCgiCode(unittest.TestCase):
    class TestField(object):
        def __init__(self, value):
            self.value = value
            
    fields = { "bar": TestField("foo") }
    
    def testBar(self, MockClass):
        instance = MockClass.return_value
        instance.__getitem__ = lambda s, key: self.fields[key]
        instance.__contains__ = lambda s, key: key in self.fields        
        result = MainCgi.simpleCgi()
        self.assertTrue(result)
        
suite01 = unittest.TestLoader().loadTestsFromTestCase(TestCgiCode)
unittest.TextTestRunner(verbosity=3).run(suite01)