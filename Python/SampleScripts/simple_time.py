#!/usr/bin/python

import time
import cgitb
cgitb.enable()

print "Content-type: text/html"
print
print "<html>"
print "<head>"
print "<title>Elvenware.com:  What is the Time? Example</title>"
print "</head>"
print "<body>"
print "<h2>Elvenware.net What is the Time? Example:</h2>"
print "<p>Elvenware thinks that it is: %s</p>" % time.ctime()
print "</body>"
print "</html>"
