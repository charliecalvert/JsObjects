#!/usr/bin/python

import boto

# For use with AWS SimpleDB
class SimpleDomainWorker():

    def __init__(self, domain):
        self.conn = boto.connect_sdb()
        self.domain = domain

    def showQuery(self, query):
        print self.conn
        domains = self.conn.get_all_domains()
        print domains
        dom = self.conn.get_domain(self.domain)
        print dom
        rs = dom.select(query)
        for j in rs:
            print j

    def createDomain(self):
        self.conn.create_domain(self.domain)

    def showAllDomains(self):
        domains = self.conn.get_all_domains()
        for domain in domains:
            print domain

    # addData('State01')
    def addData(self, itemName, itemAttrs):
        dom = self.conn.get_domain(self.domain)
        item_name = itemName
        dom.put_attributes(item_name, itemAttrs)

    def showDomainData(self):
        dom = self.conn.get_domain(self.domain)
        domain_meta = self.conn.domain_metadata(dom)
        print domain_meta.item_count
        print domain_meta.domain

    # deleteItem('States')
    def deleteItem(self, item):
        dom = self.conn.get_domain(self.domain)
        itemToDelete = dom.get_item(item)
        dom.delete_item(itemToDelete)

    # getItem('Third')
    def getItem(self, itemName):
        dom = self.conn.get_domain(self.domain)
        print dom.get_item(itemName)

    def showItems(self):
        dom = self.conn.get_domain(self.domain)
        for item in dom:
            print item.name

sq = SimpleDomainWorker("History")
sq.addData('Fifth', {'Category': 'Presidents', 'LastName': 'Obama', 'FirstName': 'Barack'})
sq.showItems()
sq.showQuery("select * from History")
