#!/usr/bin/python
import MySQLdb;
import cgi
import cgitb
cgitb.enable()

class Presidents(object):

	def getHeader(self):
		return "Content-type: text/xml\n\n"
		
	def startXml(self):
		xml ="<?xml version='1.0'?>"
		xml +="<presidents>"	
		return xml

	def endXml(self):
		return "</presidents>"

	def openDb(self):
		self.db = MySQLdb.connect(host="localhost", user="charlie", passwd="bar", db="charlie")
		self.cursor = self.db.cursor()
		return self.cursor
		
	def closeDb(self):
		self.cursor.close()
		self.db.close()
	
	def getPresidents(self):
		xml = self.getHeader()	
		xml += self.startXml()
		cursor = self.openDb()
		cursor.execute("select id, first, last from presidents")
		rows = cursor.fetchall()
		self.closeDb()
		for row in rows:
		   xml += "\t<president>"
		   xml += "\t\t<itemName>%s</itemName>" % (row[0])
		   xml += "\t\t<first>%s</first>" % (row[1])
		   xml += "\t\t<last>%s</last>" % (row[2])
		   xml += "\t</president>"
		xml += self.endXml()
		return xml

	def insertPresident(self, first, last):
		self.doInsert(first, last)
		xml = self.getHeader() + self.startXml()
		xml +="<president><first>" + first + "</first><last>" + last + "</last></president>"
		xml += self.endXml()
		return xml
		
	def delete(self, idValue):
		cursor = self.openDb()
		cursor.execute("delete from presidents where id = " + idValue + ";")
		self.db.commit()
		self.closeDb()
		
	def parseParams(self, params):
		if params.has_key('delete'):
			self.delete(params['delete'].value)
			return self.getHeader() + "<result><status>Ok</status></result>"
		else:
			first = params['first'].value
			last = params['last'].value
			return self.insertPresident(first, last)

	def doDebug(self, text):
		f = open("sam.txt", 'w')
		f.write(text)
		f.close()

	def doInsert(self, first, last):
		cursor = self.openDb()
		cursor.execute("insert into presidents (first, last) values ('" + first + "', '" + last + "');")
		self.db.commit()
		self.closeDb()

	def run(self):
		params = cgi.FieldStorage();
		if (params.length > 0):
			print self.parseParams(params)
		else:
			print self.getPresidents()
			
p = Presidents()
p.run()