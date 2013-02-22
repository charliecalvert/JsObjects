'''
Created on May 1, 2012

@author: Charlie
'''
import unittest
import os
from files.core import SimpleFile

class Test(unittest.TestCase):
    
    def get_file_name(self):
        fileName = "bar.txt"
        return fileName

    def get_file_text(self):
        textToWrite = "This line"
        return textToWrite

    def create_file(self):
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_new_text_file(self.get_file_text())
        
    def delete_file(self, simple_file):
        simple_file.delete_file()
        self.assertFalse(os.path.isfile(self.get_file_name()), "Could not delete file")

    def test_write_file(self):        
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_new_text_file(self.get_file_text())
        self.assertTrue(os.path.isfile(self.get_file_name()))
        self.delete_file(simple_file)
        
    def test_read_file(self):
        self.create_file()
        simple_file = SimpleFile(self.get_file_name())
        read_text = simple_file.read_text()
        self.assertEqual(read_text,self.get_file_text())
        self.delete_file(simple_file)
        
    def test_append_file(self):
        self.create_file()
        simple_file = SimpleFile(self.get_file_name())
        simple_file.append_text(self.get_file_text())
        read_text = simple_file.read_text()
        self.assertEqual(read_text,self.get_file_text()+self.get_file_text())
        self.delete_file(simple_file) 
               
    def test_create_csv(self):
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_csv("One", "Two", "Three")
        simple_file.write_csv("Four", "Five", "Six")
        self.delete_file(simple_file)
        
    def test_csv_row(self):
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_csv_row(["one","two","three"])
        simple_file.write_csv_row(["four","five","six"])
        self.delete_file(simple_file)
        
    def test_csv_read(self):
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_csv_row(["one","two","three"])
        simple_file.write_csv_row(["four","five","six"])
        row = simple_file.read_csv_row()
        self.assertEqual(row, ["one", "two", "three", "four", "five", "six"])
        
    def test_csv_read_item(self):
        simple_file = SimpleFile(self.get_file_name())
        simple_file.write_csv_row(["one","two","three"])
        simple_file.write_csv_row(["four","five","six"])
        item = simple_file.read_csv_get_item(1, 1)
        self.assertEqual(item, "five")
               
# suite = unittest.TestLoader().loadTestsFromTestCase(Test)
# unittest.TextTestRunner(verbosity=2).run(suite)