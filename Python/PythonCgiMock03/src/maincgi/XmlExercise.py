#!/usr/bin/python
'''
Created on May 22, 2012

@author: Charlie
'''

import cgi

class XmlExercise(object):

    def __init__(self):
        self.form = cgi.FieldStorage()
    
    def run(self):
        print "MyClass.run"                     
        print self.form["rain"].value   
        return self.form.has_key("rain")

    def getHeader(self):
        return "Content-Type: text/xml\n\n"
    
    def hasKey(self, key):
        return self.form.has_key(key)
    
    def keyIn(self, key):
        return key in self.form
    
    def hasRain(self):
        return self.form.has_key("rain")
    
    def rainIn(self):
        return "rain" in self.form
    
    def getRain(self):
        if "rain" in self.form:
            return self.form["rain"].value
        else:
            return "Could not find rain"
    
    def valueOfRainCore(self):
        xml = "<results>"
        xml += "<has_rain1>" + str(self.hasRain()) + "</has_rain1>"     
        xml += "<has_rain2>" + str(self.rainIn()) + "</has_rain2>"
        xml += "<value>" + self.getRain() + "</value>"
        xml += "</results>"
        return xml
    
    def valueOfRain(self):        
        xml = self.getHeader() + self.valueOfRainCore()   
        return xml
        
    def allParametersCore(self):
        xml = "<values>"  
        for item in self.form.list:
            xml += "<item_name>" + item.name + "</item_name>"
            xml += "<value>" + item.value + "</value>"
        xml += "</values>"
        return xml
        
    def allParameters(self):
        xml = self.getHeader() + self.allParametersCore()        
        return xml
            
    def validParams(self):                
        for item in self.form:
            print item
        print self.form["rain"].value
        print self.form["amount"].value
        print "rain" in self.form
        return "rain" in self.form 

