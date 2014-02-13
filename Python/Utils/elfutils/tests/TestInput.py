'''
Created on May 27, 2012

@author: Charlie
'''
import unittest
import elfutils.elfinput as elfInput

class TestInput(unittest.TestCase):


    def setUp(self):
        pass


    def tearDown(self):
        pass


    def testInput(self):
        userInput = elfInput.getInput()
        self.assertTrue(len(userInput) > 0)


if __name__ == "__main__":    
    unittest.main()