#!/usr/bin/python

import boto

# create unique bucket name
s3 = boto.connect_s3()
bucket = s3.create_bucket('s3bucket02.elvenware.com')
key = bucket.new_key('zips/AndElfHtml.zip')
key.set_contents_from_filename('AndElfHtml.zip')
key.set_acl('public-read')

