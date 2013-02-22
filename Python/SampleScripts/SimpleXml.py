#!/usr/bin/python

import cgi
import cgitb
cgitb.enable()

print "Content-type: text/xml"
print
print "<?xml version='1.0'?>"	
print "<names>"
print "\t<name>"
print "\t\t<first>Alpha</first>"
print "\t\t<last>Delta</last>"
print "\t</name>"
print "\t<name>"
print "\t\t<first>Bravo</first>"
print "\t\t<last>Omega</last>"
print "\t</name>"
print "</names>"
