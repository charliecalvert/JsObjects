#!/usr/bin/python

import boto

s3 = boto.connect_s3()
bucket = s3.create_bucket('s3bucket01.elvenware.com')  # bucket names must be unique
key = bucket.new_key('test/test01.csv')
key.set_contents_from_filename('c:/users/charlie/documents/temp/Presidents.csv')
key.set_acl('public-read')
