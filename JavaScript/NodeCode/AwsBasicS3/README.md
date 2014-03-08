AwsBasicS3
==========

An example of how to use Node JS to upload files to S3.

Note that you will need to edit config.json to include your
AWS key. Note also that you will need to edit this line
in Server.js:

	var config = AWS.config.loadFromPath('/src/Config/config.json');

It should point to your copy of config.json. The end result might
look something like this:

	var config = AWS.config.loadFromPath('config.json');
	
# Links

- [S3 Docs on AWS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html)
- [AWS Pricing](http://aws.amazon.com/pricing/s3/)
