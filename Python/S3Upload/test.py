#! /usr/bin/python3

'''
Created on May 2, 2016

@author: Charlie Calvert
'''

import unittest
import elf_config_manager

class TestReadConfig(unittest.TestCase):

    def setUp(self):
        self.configManager = elf_config_manager.ConfigManager()
        self.config = self.configManager.readConfig()
        self.calvert = self.configManager.getCalvert()
        self.elvenImages = self.configManager.getElvenImages()

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
        california1 = self.configManager.getSelectedObject('california1')
        name = california1['name']
        baseDir = california1['baseDir']
        allimagesJson = california1['allImagesJsonFile']
        self.assertEqual(name, 'california1')
        self.assertEqual(baseDir, "/var/www/html/images")
        self.assertEqual(allimagesJson, "/home/charlie/ElvenImages/all-images-california1.json")

    def testGetSelectedObjectNames(self):
        names = ['california1', "california23"]
        self.configManager.setSelectedObjectNames(names)
        names = self.configManager.getSelectedObjectNames()
        self.assertEqual(type(names), list, "Not equal")
        self.assertEqual(names, ['california1', "california23"])

    def testGetElvenHome(self):
        home = self.configManager.getElvenHome()
        self.assertEqual(home, '/home/charlie/ElvenImages/', 'not equal')

def runTest():
    suite = unittest.TestLoader().loadTestsFromTestCase(TestReadConfig)
    unittest.TextTestRunner(verbosity=2).run(suite)



if __name__ == '__main__':
    runTest()
    #unittest.main()