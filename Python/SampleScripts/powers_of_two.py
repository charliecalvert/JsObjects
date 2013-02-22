#!/usr/bin/python
print "Content-type: text/html"
print
print "<html><head>"
print "<title>The Powers of Two</title>"
print "</head><body>"
print "<h1>Powers of two</h1>\n<ol>"
for n in range(1,11):
	print "<li>"+str(2**n)+"</li>"
print "</ol>"
print "</body>"
print "</html>"