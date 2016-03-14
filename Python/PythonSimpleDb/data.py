#!/usr/bin/python3

# sudo pip3 install pymysql

# Turn on debug mode.
import cgitb
cgitb.enable()

# Print necessary headers.
print("Content-Type: text/html")
print()

# Connect to the database.
import pymysql
conn = pymysql.connect(
    db='example',
    user='root',
    passwd='foobar',
    host='localhost')
cursor = conn.cursor()

# Insert some example data.
#cursor.execute("INSERT INTO numbers VALUES (1, 'One!')")
#cursor.execute("INSERT INTO numbers VALUES (2, 'Two!')")
#cursor.execute("INSERT INTO numbers VALUES (3, 'Three!')")
#conn.commit()

# Print the contents of the database.
cursor.execute("SELECT * FROM numbers")
# print(['{' + (r[0], r[1]) for r in cursor.fetchall()])

for row in cursor:
    row = '<p>' + str(row[0]) + ' ' + row[1] + '</p>'
    print(row)

cursor.close()
conn.close()

