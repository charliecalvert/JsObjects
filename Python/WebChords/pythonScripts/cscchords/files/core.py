import os
import csv

class SimpleFile(object):
        
    def __init__(self, fileName):
        self.fileName = fileName
    
    def write_new_text_file(self, textToWrite):
        f = open(self.fileName, 'w')
        f.write(textToWrite)
        f.close()
    
    def append_text(self, textToWrite):
        f = open(self.fileName, 'a')
        f.write(textToWrite)
        f.close()
        
    def read_text(self):
        f = open(self.fileName, 'r')
        read = f.read()
        return read
    
    def delete_file(self):
        os.remove(self.fileName)

    
    def write_csv(self, param1, param2, param3):
        f = open(self.fileName, 'a')
        data = param1 + "," + param2 + "," + param3 + "\n";
        f.write(data)
        f.close()
        
    def write_csv_row(self, row):
        f = csv.writer(open(self.fileName, 'ab'))
        f.writerow(row) 
        
    def read_csv_row(self):
        f = csv.reader(open(self.fileName, 'rb'))        
        data = []
        for row in f:
            data += row
        return data
    
    def read_csv_row_number(self, row_number):
        f = csv.reader(open(self.fileName, 'rb'))
        count = 0        
        for row in f:
            if count == row_number:
                return row
            count += 1
        
    
    def read_csv_get_item(self, row_num, item_num):
        f = csv.reader(open(self.fileName, 'rb'))
        count = 0
        for row in f:
            if count == row_num:
                return row[item_num]
            count += 1