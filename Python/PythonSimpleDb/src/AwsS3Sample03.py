#!/usr/bin/python

import boto

class S3Buckets():

	def __init__(self):
		self.bucketName = 's3bucket01.elvenware.com'
		self.bucketFileName = 'test/test01.csv'
		
	def CreateBucketAndFile(self):
		s3 = boto.connect_s3()
		bucket = s3.create_bucket(self.bucketName)
		key = bucket.new_key(self.bucketFileName)
		key.set_contents_from_filename('c:/users/charlie/documents/temp/Presidents.csv')
		key.set_acl('public-read')

	def GetFile(self):
		s3 = boto.connect_s3()
		key = s3.get_bucket(self.bucketName).get_key(self.bucketFileName)
		key.get_contents_to_filename('myfile.csv')
	
s3Buckets = S3Buckets()
s3Buckets.CreateBucketAndFile()
s3Buckets.GetFile()