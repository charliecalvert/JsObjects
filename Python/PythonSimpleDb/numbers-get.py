#! /usr/bin/python3

import cgitb
cgitb.enable()

# https://www.linux.com/community/blogs/129-servers/757148-configuring-apache2-to-run-python-scripts

import pymysql
import json

print("Content-Type: text/json")
print()

conn = pymysql.connect(host='localhost', user='root', passwd='foobar', db='example')

cursor = conn.cursor()

cursor.execute("SELECT * FROM numbers")

#description = "<p>" + cursor.description + "</p>"
#print(description)

print()

#for row in cur:
#    print(row)
    
rows = cursor.fetchall()

print(json.dumps(rows));

cursor.close()
conn.close()
