'''
Created on May 27, 2012

@author: Charlie
'''
import os
import shutil
import unittest
import elfutils.elffiles as elfFiles

class TestFiles(unittest.TestCase):


    def setUp(self):
        self.curDir = os.getcwd()        
        self.tempStartDir = os.path.join(self.curDir, "tempStart" + os.sep)
        self.tempDestDir = os.path.join(self.curDir, "tempEnd" + os.sep)         
        elfFiles.ensureDir(self.tempStartDir)
        elfFiles.ensureDir(self.tempDestDir)
        file1 = open(self.tempStartDir + "Temp.txt", "w")
        file1.write("SomeText")
        file1.close()

    def tearDown(self):
        shutil.rmtree(self.tempStartDir)
        shutil.rmtree(self.tempDestDir)
        pass

    def testCopyFile(self):        
        files = ["TestFiles.py", "__init__.py"]
        elfFiles.copyFiles(self.tempDestDir, "", files, True)
        for fileName in files:
            fileName = self.tempDestDir + files[0]            
            result = os.path.exists(fileName)
            self.assertTrue(result, "Could not copy file")
            
    def testGetFilesFromExtension(self):
        files = elfFiles.getFilesFromExtensions("../", [".py", ".txt"])
     
        # We should have found 10 files
        self.assertEqual(len(files), 11)
        for fileName in files:       
            print fileName     
            self.assertTrue(os.path.exists(fileName))
        

if __name__ == "__main__":    
    unittest.main()