import os
import unittest
import elffiles


class TestFileOperations(unittest.TestCase):
	
	def testFinalSlash01(self):
		testPath = "C:\\Test"
		actual = elffiles.ensureFinalSlash(testPath)
		self.assertEqual(actual, testPath + os.sep)
		
		
	def testFinalSlash02(self):
		testPath = "C:\\Test\\"
		actual = elffiles.ensureFinalSlash(testPath)
		self.assertEqual(actual, testPath)
	
	def testFinalSlash03(self):
		testPath = "C:/Test/"
		actual = elffiles.ensureFinalSlash(testPath)
		self.assertEqual(actual, testPath + os.sep)
		
	def testFinalSlash04(self):
		testPath = "Test/"
		actual = elffiles.ensureFinalSlash(testPath)
		self.assertEqual(actual, testPath + os.sep)

	def testFinalSlash05(self):
		testPath = "Test"
		actual = elffiles.ensureFinalSlash(testPath)
		self.assertEqual(actual, testPath + os.sep)

	def removeFolder(self, folder):
		elffiles.removeDirs(folder)
		self.assertFalse(os.path.exists(folder))

	def testEnsureDir01(self):
		testPath = elffiles.ensureFinalSlash(os.environ['ELVENWARE']) + "Bar"
		elffiles.ensureDir(testPath)
		self.assertTrue(os.path.exists(testPath))
		self.removeFolder(testPath)
		
	def testEnsureDir02(self):
		testPath = elffiles.ensureFinalSlash(os.environ['ELVENWARE']) + "Bar/Foo/Goober"
		elffiles.ensureDir(testPath)
		self.assertTrue(os.path.exists(testPath))
		self.removeFolder(elffiles.ensureFinalSlash(os.environ['ELVENWARE']) + "Bar")

if __name__ == '__main__':
	unittest.main()