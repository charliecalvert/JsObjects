#! /usr/bin/python3

import cgitb
cgitb.enable()

import pymysql
import json

print("Content-Type: text/json")
print()

conn = pymysql.connect(host='localhost', user='root', passwd='foobar', db='prog270')

cursor = conn.cursor()

cursor.execute("SELECT * FROM presidents")
   
rows = cursor.fetchall()

print(json.dumps(rows));

cursor.close()
conn.close()
