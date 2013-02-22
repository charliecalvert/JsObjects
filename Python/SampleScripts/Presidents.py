#!/usr/bin/python
import MySQLdb;
import cgi
import cgitb
cgitb.enable()

class Presidents():

	def __init__(self):
		self.header = "Content-Type: text/html\n\n"
		self.html = "<!DOCTYPE html>\n<html>\n<head>\n"
		self.html += "\t<title>Presidents</title>\n"
		self.html += "\t<meta charset='utf-8'>\n"		
		self.html += "\t<meta name='viewport' content='width=device-width'>"
		self.html += "</head>\n<body>\n"

	def queryDatabase(self):
		db = MySQLdb.connect(host="localhost", user="charlie", passwd="XXX", db="YYY")
		cursor = db.cursor()
		cursor.execute("select first, last from presidents")
		rows = cursor.fetchall()
		for row in rows:
			self.html += "\t<p>%s %s</p>\n" % (row[0], row[1])
	   
	def endDocument(self):
		self.html += "</body>\n</html>\n"		

	def run(self):		
		self.queryDatabase()
		self.endDocument()
		return self.header + self.html

if __name__ == '__main__':
	presidents = Presidents()
	print presidents.run()