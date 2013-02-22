#!/usr/bin/python

import boto

s3 = boto.connect_s3()
key = s3.get_bucket('s3bucket01.elvenware.com').get_key('test/test01.csv')
key.get_contents_to_filename('myfile.csv')
