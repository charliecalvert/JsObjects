#!/usr/bin/python
import MySQLdb;
import cgi

print "Content-type: text/xml"
print
print "<?xml version='1.0'?>"
print "<presidents>"
db = MySQLdb.connect(host="localhost", user="MyName", passwd="MyPassword", db="MyDatabase")
cursor = db.cursor()
cursor.execute("select first, last from presidents")
rows = cursor.fetchall()
for row in rows:
   print "\t<president>"
   print "\t\t<first>%s</first>" % (row[0])
   print "\t\t<last>%s</last>" % (row[1])
   print "\t</president>"
print "</presidents>"

