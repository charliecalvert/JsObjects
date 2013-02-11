#!/usr/bin/python

import cgitb
cgitb.enable()
import MySQLdb

def getStart():
	return """Content-type: text/html\n\n
<!DOCTYPE html>\n<html>\n<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>Read Adding Machine</title>	
</head>
<body>
	<h3>Read Adding Machine</h3>"""		

def getClose():
	return "</body>\n</html>\n"

def getRows():
	html = ""
	db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
	cursor = db.cursor()
	cursor.execute("select operanda, operandb, answer from additions")
	rows = cursor.fetchall()
	for row in rows:
		html += "\t<p>" + str(row[0]) + "+" + str(row[1]) + "=" + str(row[2]) + "</p>\n"
	cursor.close()
	db.close()
	return html
	
def readAddingData():
	html = getStart()
	html += getRows()
	html += getClose()
	return html
	
print readAddingData()
