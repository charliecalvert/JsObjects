#!/usr/bin/python
'''
Created on May 23, 2012

@author: Charlie
'''
import os
import unittest


class FileTests(unittest.TestCase):


    def setUp(self):        
        self.fileNames = []               
        path = os.path.abspath('../../')         
        for root,dirs,files in os.walk(path):            
            for fileName in files:
                if fileName.endswith(".py"):
                    self.fileNames.append(os.path.join(root,fileName))
        pass


    def tearDown(self):
        pass

    def checkFileExists(self, fileName):        
        self.assertTrue(os.path.isfile(fileName), "Can't find file {0}".format(fileName))

    def checkLineEndings(self, fileName):
        data = open(fileName, "rb").read()
        self.assertFalse('\r\n' in data, "Contains Windows style line endings: {0}".format(fileName))                
        
    def checkLinksToPython(self, fileName):        
        if (os.path.getsize(fileName)) > 0:
            data = open(fileName, "r")
            line = data.readline()            
            self.assertTrue(line.startswith('#!'), "File does not link to python: {0}".format(fileName))
            
    def testFilesExist(self):
        for fileName in self.fileNames:
            self.checkFileExists(fileName)
            
    def testLineEndings(self):        
        for fileName in self.fileNames:                        
            self.checkLineEndings(fileName)
            
    def testLinksToPython(self):
        for fileName in self.fileNames:
            self.checkLinksToPython(fileName)        

if __name__ == "__main__":    
    unittest.main()