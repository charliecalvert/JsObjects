#!usr/bin/python
'''
Created on May 25, 2012

@author: Charlie
'''

from HTMLParser import HTMLParser

class MyHtmlParser(HTMLParser):
    
    def __init__(self):
        HTMLParser.__init__(self)
        self.pTag = False
        self.allParagraphText = ""
    
    def handle_starttag(self, tag, attrs):        
        #print "Start tag: {0} {1}".format(tag, attrs)
        if tag == "p":            
            self.pTag = True

    def handle_endtag(self, tag):        
        #print "Encountered an end tag: {0}".format(tag)
        if tag == "p":
            self.pTag = False
        
    def handle_data(self, data):        
        #print "Encountered some data  :", data        
        if self.pTag == True:            
            self.allParagraphText += data + '\n'
