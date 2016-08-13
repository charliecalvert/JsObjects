#! /usr/bin/python3

'''
Created on May 2, 2016

@author: Charlie Calvert
'''

import unittest
import read_config

class TestReadConfig(unittest.TestCase):

    def setUp(self):
        self.readConfig = read_config.ReadConfig()
        self.config = self.readConfig.readConfig()
        self.calvert = self.readConfig.getCalvert()
        self.elvenImages = self.readConfig.getElvenImages()

    def testType(self):        
        self.assertEqual(type(self.config), dict, "Not equal")

    def testCalvert(self):
        self.assertEqual(type(self.calvert), dict, "Not equal")

    def testBaseDir(self):
        baseDir = self.calvert['base-dir']
        self.assertEqual(baseDir, '/home/charlie/', "Not equal")

    def testElvenImages(self):
        self.assertEqual(type(self.elvenImages), list, "Not equal")

    def testCalifornia1(self):
        california1 = self.readConfig.getSelectedObject('california1')
        name = california1['name']
        baseDir = california1['baseDir']
        self.assertEqual(name, 'california1')
        self.assertEqual(baseDir, "/var/www/html/images")

def runTest():
    suite = unittest.TestLoader().loadTestsFromTestCase(TestReadConfig)
    unittest.TextTestRunner(verbosity=2).run(suite)



if __name__ == '__main__':
    runTest()
    #unittest.main()