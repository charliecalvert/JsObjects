#!/usr/bin/python
'''
Created on May 5, 2012

@author: Charlie
'''

import cgi
import cgitb
import boto
import ConfigParser
from files.core import SimpleFile
cgitb.enable()

class SimpleDbChords():

    def __init__(self, domain):
        self.writeFile("GetChords Init called");
        config = ConfigParser.RawConfigParser()
        config.read('.boto')
        key = config.get('Credentials', 'aws_access_key_id')
        secretKey = config.get('Credentials', 'aws_secret_access_key')
        self.conn = boto.connect_sdb(key, secretKey)
        self.writeFile("GetChords connection done");
        self.domain = domain

    def handleParams(self):
        params = cgi.FieldStorage()
        if params.has_key('pattern'):
            self.selectPattern(params['pattern'].value)
        else:
            print self.getXml()

    def selectPattern(self, index):
        if index == "1":
            print self.getXmlFromPattern('select P1, P4, P5 from Chords', [0, 1, 2, 2])
        elif index == "2":
            print self.getXmlFromPattern('select P1, P4, P5 from Chords', [0, 2, 0, 1])
        elif index == "3":
            print self.getXmlFromPattern('select P1, P4, P5 from Chords', [0, 1, 2, 1])

    def createDomain(self):
        self.conn.create_domain(self.domain)

    def putRow(self, row):
        dom = self.conn.get_domain(self.domain)
        item_name = 'KeyOf' + row[0]
        dom.put_attributes(item_name, { 'P1': row[1], 'P2': row[2], 'P3': row[3], 'P4':row[4], 'P5':row[5], 'P6': row[6], 'P7':row[7] })

    def showItems(self):
        dom = self.conn.get_domain(self.domain)
        for item in dom:
            print item.name
            print dom.get_item(item.name)

    def deleteAll(self):
        dom = self.conn.get_domain(self.domain)
        for item in dom:
            dom.delete_item(item)

    # deleteItem('States')
    def deleteItem(self, item):
        dom = self.conn.get_domain(self.domain)
        itemToDelete = dom.get_item(item)
        dom.delete_item(itemToDelete)

    def add_new_row(self, row_index, save_row = True):
        simple_file = SimpleFile("Chords.csv")
        row = simple_file.read_csv_row_number(row_index)
        if save_row:
            self.putRow(row)
        return row

    def add_rows(self):
        for x in range(1,8):
            self.add_new_row(x, True)

    def getRowItem(self, row, index):
        dom = self.conn.get_domain(self.domain)
        count = 0
        for item in dom:
            if row == count:
                return item[index]
            count += 1

    def runQuery(self, query):
        dom = self.conn.get_domain(self.domain)
        result = dom.select(query)
        for dict in result:
            print dict
            values = dict.values()
            values.sort()
            print values[0]

    def startXml(self):
        xml = "Content-Type: text/xml\n\n"
        xml += "<?xml version='1.0'?>\n"
        xml += '<keys>\n'
        return xml

    def getXml(self):
        dom = self.conn.get_domain(self.domain)
        result = dom.select('select * from Chords')
        xml = self.startXml()
        for item in result:
            xml += "\t<key>\n"
            keys = item.keys()
            keys.sort()
            for x in keys:
                xml += '\t\t<item' + x + '>' + item[x] + '</item' + x + '>\n'
            xml += "\t</key>\n"
        xml += '</keys>'
        return xml

    def getXmlFromPattern(self, query, numItems):
        dom = self.conn.get_domain(self.domain)
        result = dom.select(query)
        xml = self.startXml()
        for item in result:
            keys = item.keys()
            keys.sort()
            xml += '\t<key>\n'
            count = 0
            for x in numItems:
                count += 1
                xml += '\t\t<item' + keys[x] + ' id="pos0' + str(count) + '">' + item[keys[x]] + '</item' + keys[x] + '>\n'
            xml += '\t</key>\n'
        xml += '</keys>'
        return xml

    def getKey(self, key):
        dom = self.conn.get_domain(self.domain)
        
    def writeFile(self, data):
        f = open("debug.txt", "a")
        f.write(data + "\n")
        f.close()

#config = ConfigParser.RawConfigParser()
#config.read('.boto')
#key = config.get('Credentials', 'aws_access_key_id')
#print key

chords = SimpleDbChords("Chords")
chords.writeFile("GetChords Started")
chords.handleParams()
#chords.add_rows()
#chords.deleteAll()
#chords.deleteItem('KeyOfC')
#print chords.getRowItem(2, '4')
#print chords.getRowItem(2, '5')
#chords.runQuery("select `P4`, `P5` from Chords where `P1` = 'C'")
#chords.showItems()
