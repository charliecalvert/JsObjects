'''
Created on May 27, 2012

@author: Charlie Calvert
'''
import unittest
from TestMe import TestMe
from elfutils.MockCgiBase import MockCgiBase
from elfutils.TestField import TestField
from mock import patch


@patch('cgi.FieldStorage')
class Test(MockCgiBase):

    def defineFields(self):
        # overriding method from base class
        return { "rain": TestField("drizzle"), "clouds": TestField("scattered") }
    
    def setUpBaseClass(self):
        # overriding method from base class
        return TestMe()

    def testGetRain(self, MockClass):
        self.setUpMock(MockClass)
        rain = self.classToTest.getRain()
        self.assertEqual(rain, 'drizzle', "Value unexpected: {0}".format(rain))
        
    def testGetClouds(self, MockClass):
        self.setUpMock(MockClass)
        clouds = self.classToTest.getClouds()
        self.assertEqual(clouds, 'scattered', "Value unexpected: {0}".format(clouds))

if __name__ == "__main__":    
    unittest.main()