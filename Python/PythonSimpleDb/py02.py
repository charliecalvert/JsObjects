#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# Python database help is here: 
#   http://www.tutorialspoint.com/python/python_database_access.htm

# enable debugging
import cgi
import cgitb

cgitb.enable()

import sys
import MySQLdb


def getDatabase():
	# Open database connection
	db = MySQLdb.connect("localhost","root","foobar","Meetings" );
	# db = MySQLdb.connect("192.168.13.33","esig","billw417","Meetings" );
	return db;

def getCursor(db):
	cursor = db.cursor()
	cursor.execute("select * from `all_meetings`;")
	return cursor;

def annotations(db):
	cursor = db.cursor()
	try:
		cursor.execute("delete from annotations")
		cursor.execute("insert into annotations (name) values('Open')")
		cursor.execute("insert into annotations (name) values('Closed')")
		cursor.execute("insert into annotations (name) values('Men')")
		cursor.execute("insert into annotations (name) values('Women')")
		cursor.execute("insert into annotations (name) values('Childcare')")
		cursor.execute("insert into annotations (name) values('Al-Anon')")
		cursor.execute("insert into annotations (name) values('Alateen')")
		cursor.execute("insert into annotations (name) values('LGBT')")
		cursor.execute("insert into annotations (name) values('Youth')")
		cursor.execute("insert into annotations (name) values('Spanish')")
		cursor.execute("insert into annotations (name) values('Study Group Twelve by Twelve')")
		cursor.execute("insert into annotations (name) values('Study Group Big Book')")
		cursor.execute("insert into annotations (name) values('Study Group Daily Reflections')")
		cursor.execute("insert into annotations (name) values('Wheelchair Parking')")
		cursor.execute("insert into annotations (name) values('Wheelchair Bathroom')")
		cursor.execute("insert into annotations (name) values('Wheelchair Entry')")
		db.commit()
	except:
		db.rollback()

def annotateMeeting():
	cursor.execute("insert into meeting_annotation (meeting_id, annotation_id) values(1, 74)")

def writeHeader():
	print "Content-Type: text/plain;charset=utf-8"
	print

def writeVersion():
	cur_version = sys.version_info
	print "version" + str(cur_version)


def addToField(allFields, mtList):
	for item in mtList:
		if item not in allFields:
			if item != '':
				allFields.append(item)
	return allFields

def printSpacer():
	print 
	print '==============================================='
	print

def getRowData(data):
	row = {}

	row['meeting_id'] = data[0]
	row['day'] = data[1]
	row['time'] = data[2]
	row['town'] = data[3]
	row['meeting_name'] = data[4]
	row['location'] = data[5]
	row['street_address'] = data[6]
	row['city'] = data[7]
	row['state'] = data[8]
	row['zip'] = data[9]
	row['oldmt'] = data[10]
	if len(data) > 11:
		for x in range(11, (len(data))):
			row['an' + str(x)] = data[x]
	return row;

def getData(cursor):
	results = cursor.fetchall()
	allData = []
	for data in results:
		row = getRowData(data)
		allData.append(row)
	return allData;

def getAnnotationData(cursor):
	allFields = []

	results = cursor.fetchall()
	for data in results:
	#for x in range(0, 95):
	#	data = results[x]
		row = getRowData(data)
		printSpacer()
		print row['meeting_id']
		mtList = row['oldmt'].split(',')
		mtList = [x.strip(' ') for x in mtList]
		print mtList
		
		allFields = addToField(allFields, mtList)
		
	return allFields

def showData(allFields):
	writeHeader()

	printSpacer()
	
	print allFields

	printSpacer()

	allFields.sort()
	print allFields

	for field in allFields:
		print field

def getQueryFields():
	db = getDatabase()
	cursor = getCursor(db)
	allFields = getAnnotationData(cursor)
	showData(allFields)
	# disconnect from server
	db.close()
	
def annotationsRun():
	db = getDatabase()
	annotations(db)
	db.close()

def getAllRows():
	db = getDatabase()
	cursor = getCursor(db)
	allMeetings = getData(cursor)
	writeHeader();
	for meeting in allMeetings:
	#for x in range(0, 3):
	#	meeting = allMeetings[x]
		print meeting['meeting_name']
		print meeting['day']
	db.close()
	
def linkAnnotation(db, cursor, meetingId, annotationId):
	query = "insert into meeting_annotation (meeting_id, annotation_id) values(" + str(meetingId) + ", " + str(annotationId) + ")"
	try:
		cursor.execute(query)
		db.commit()
	except:
		db.rollback()

def getOpenFromOldData(db, cursor, allMeetings, query, annotationId):
	for meeting in allMeetings:
		if query in meeting['oldmt']:
			print meeting['meeting_name']
			print meeting['oldmt']
			linkAnnotation(db, cursor, meeting['meeting_id'], annotationId)

def defineQueries():
	db = getDatabase()
	cursor = getCursor(db)
	allMeetings = getData(cursor)
	writeHeader();
	#getOpenFromOldData(db, cursor, allMeetings, 'Open', 74)
	#getOpenFromOldData(db, cursor, allMeetings, 'Closed', 89)
	#getOpenFromOldData(db, cursor, allMeetings, 'Women', 76)
	#getOpenFromOldData(db, cursor, allMeetings, 'Men', 75)
	getOpenFromOldData(db, cursor, allMeetings, 'Childcare', 77)
	db.close()
	
# This code is not as complicated as it seems. Look in JoinQuery.sql and you
# will see the kind of query I'm generating here. Once you understand the
# query, the code here is fairly obvious. But you probably want to grok
# the query first, then come back and look at this code.
def getQueryString(list):
	queryStart = "SELECT a.*, an.name"
	query = " FROM all_meetings a"
	queryLength = len(list)
	for x in range(0, queryLength):
		q = list[x]
		alias = "ma" + str(x)
		query += " INNER JOIN meeting_annotation " + alias + " on a.meeting_id = " + alias + ".meeting_id and " + alias + ".annotation_id=" + str(q)
	query += " INNER JOIN annotations an on an.annotation_id = ma0.annotation_id and an.annotation_id=" + str(list[0])
	if (queryLength > 1):
		for y in range(1, queryLength):
			q = list[y]
			alias = "an" + str(y)
			queryStart += ", " + alias + ".name"
			query += " INNER JOIN annotations " + alias + " on " + alias + ".annotation_id=" + str(q)
	query += " ORDER BY a.meeting_id;"
	return queryStart + query
	
def createQuery(list):
	db = getDatabase()
	cursor = db.cursor()
	query = getQueryString(list)
	try:
		cursor.execute(query)
		db.commit()
	except:
		db.rollback()
	allMeetings = getData(cursor)
	writeHeader();
	print query
	for meeting in allMeetings:
	#for x in range(0, 3):
	#	meeting = allMeetings[x]
		printSpacer()
		print meeting['meeting_id']
		print meeting['meeting_name']
		print meeting['day']
		print meeting['oldmt']
		print meeting['an11']
		print meeting['an12']
		#print meeting['an13']
	db.close()
	

#getAllRows();

writeHeader()

form = cgi.FieldStorage()
if "query" not in form:
    print "<H1>Error</H1>"
    print "Please fill in the query field."
    #return
print "<p>name:", form["query"].value

# createQuery([77, 89])
