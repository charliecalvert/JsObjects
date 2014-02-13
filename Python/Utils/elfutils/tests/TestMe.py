'''
Created on May 27, 2012

@author: Charlie Calvert
'''

import cgi

class TestMe(object):
    # This is a sample object used when testing MockCgiBase
    
    def __init__(self):
        self.form = cgi.FieldStorage()
        
    def getRain(self):
        return self.form["rain"].value

    def getClouds(self):
        return self.form["clouds"].value