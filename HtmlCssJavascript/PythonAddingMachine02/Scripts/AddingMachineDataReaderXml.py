#!/usr/bin/python

import cgi
import cgitb
import MySQLdb
cgitb.enable()

def readAddingData():
	print "Content-type: text/xml\n"
	print "<additions>"
	
	db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
	cursor = db.cursor()
	cursor.execute("select operanda, operandb, answer from additions")
	rows = cursor.fetchall()
	for row in rows:
		operanda = str(row[0])
		operandb = str(row[1])
		answer = str(row[2])
		print "\t<addition>"	
		print "\t\t<operanda>" + operanda + "</operanda>"
		print "\t\t<operandb>" + operandb + "</operandb>"
		print "\t\t<answer>" + answer + "</answer>"
		print "\t</addition>"
	print "</additions>"		
	cursor.close()
	db.close()
	
readAddingData()
