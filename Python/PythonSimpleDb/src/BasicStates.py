'''
Created on Apr 30, 2012

@author: Charlie
'''

class MyClass(object):
    '''
    classdocs
    '''


    def __init__(self):
        '''
        Constructor
        '''

    # addData('State01')
    def addData(self, itemName):
        dom = self.conn.get_domain(self.domain)
        item_name = itemName
        item_attrs = {'StateName':'Oregon', 'Abbreviation':'OR', 'Capital':'Salem', 'Population':'26'}
        dom.put_attributes(item_name, item_attrs)
