#!/usr/bin/python
'''
Created on May 14, 2012

@author: Charlie
'''

import ConfigParser
import boto
import cgitb
cgitb.enable()

class MyClass(object):

    def __init__(self, domain):
        config = ConfigParser.RawConfigParser()
        config.read('.boto')
        key = config.get('Credentials', 'aws_access_key_id')
        secretKey = config.get('Credentials', 'aws_secret_access_key')
        self.conn = boto.connect_sdb(key, secretKey)
        self.domain = domain

    def showDomains(self):
        domains = self.conn.get_all_domains()
        print domains

    def createDomain(self):
        self.conn.create_domain(self.domain)

    def addData(self, itemName, itemAttrs):
        dom = self.conn.get_domain(self.domain)
        item_name = itemName
        dom.put_attributes(item_name, itemAttrs)

    def startXml(self):
        xml = "Content-Type: text/xml\n\n"
        xml += "<?xml version='1.0'?>\n"
        xml += '<test01 count="5">\n'
        return xml

    def showQuery(self, query):
        dom = self.conn.get_domain(self.domain)
        result = dom.select(query)
        xml = self.startXml()
        for item in result:
            xml += "\t<line>\n"
            keys = item.keys()
            keys.sort()
            for x in keys:
                xml += '\t\t<' + x + '>' + item[x] + '</' + x + '>\n'
            xml += "\t</line>\n"
        xml += '</test01>'
        return xml


my_class = MyClass("Test01")
# my_class.addData('Line01', {'Field01': 'one', 'Field02': 'two'})
# my_class.showDomains()
print my_class.showQuery('select * from Test01')
