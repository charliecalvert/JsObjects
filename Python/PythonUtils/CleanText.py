#!/bin/python

f = open('Week11.md', 'r')
text = f.read()
result = text.decode('iso-8859-1').encode('ascii', 'ignore')
# result = text.encode("ascii", "ignore")
fw = open('bar.txt', 'w')
fw.write(result)
fw.close()
