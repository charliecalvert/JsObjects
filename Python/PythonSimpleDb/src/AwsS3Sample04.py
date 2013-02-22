#!/usr/bin/python

import boto

s3 = boto.connect_s3()
s3.get_bucket('s3bucket01.elvenware.com').delete_key('test')
