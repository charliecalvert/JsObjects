AwsBasicS3
==========

An example of how to use Node JS to upload files to S3.

## Set Up

You need to be sure you have the environmonent variables JSOBJECTS and PYTHON path set up correctly. I have the following at the bottom of my .bashrc file:

    export JSOBJECTS=$HOME/Git/JsObjects
    export PYTHONPATH=${PYTHONPATH}:$JSOBJECTS/Python/:$JSOBJECTS/Python/Utils/:$JSOBJECTS/Python/Utils/RegEx/:

You may need to tweak the first of these two lines slightly to fit the set up on your system.

On Windows I set up my enviornment variables with this batch file that I call **SetEnvionmentVariables.bat:**

    @ECHO OFF
    
    ECHO =========================
    SetX GITHUB %USERPROFILE%\Documents\GitHub
    REM Setx GITHUB C:\Src\Git
    SetX JSOBJECTS %GITHUB%\JsObjects
    
    set BASE=%JSOBJECTS%\Python
    SetX PYTHONPATH %BASE%;%BASE%\Utils;%BASE%\RegEx;%BASE%
    ECHO =========================
    ECHO GITHUB = %GITHUB%
    ECHO JSOBJECTS = %JSOBJECTS%
    ECHO PYTHONPATH = %PYTHONPATH%
    ECHO =========================
    ECHO You will need to restart this command window 
    ECHO before these variables take effect.
    ECHO =========================

I maintain **SetEnvironmentVariables** in [JsObjects](https://github.com/charliecalvert/JsObjects/blob/master/Utilities/InstallScripts/SetEnvironmentVariables.bat).

## The Config File

Note that you will need to edit config.json to include your
AWS key. Note also that you will need to edit the options
found in Server.js.

You need to get the access keys from the [AWS security page](https://console.aws.amazon.com/iam/home?#security_credential) and put them in **config.json**:

    { "accessKeyId": "ACCESS KEY HERE", "secretAccessKey": "SECRET KEY HERE", "region": "us-east-1" }

You need to replace the strings **ACCESS KEY HERE** and **SECRET KEY HERE** with your access and secret keys from AWS.

Your access key will look like this: **AKIAIOSFODNN7EXAMPLE**

Your secret key will look like this: **wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY**

More information is available in the [AWS security credential docs](http://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html): 

## The Options

When editing the Options class, you will should be careful
when specifying paths in Windows. Do not use a single
backslash. Instead, study from one of the following
examples:
 
  folderToWalk: C:/Temp/MyFolder
  folderToWalk: C:\\Temp\\MyFolder
  pathToConfig: C:\\Src\\MySite\\config.json
  pathToConfig: C:/Temp/MySite/config.json
 
Do not to do this:
 
  folderToWalk: C:\Temp\MyFolder

The pathToConfig property should point to your 
copy of config.json. This file contains your
Security key linked from the main menu (the one
with your name) in AWS.

## Copying Files on Linux

This programs works with two sites:

- A staging site.
- The release site on S3

On Linux, I typically use **/var/www/bc** as my staging site. Then I access it by typing the following in the address bar of my browser:

    http://localhost/bc
    
For security reasons, by default, you do not have rights to write to **/var/www/bc**. Since we talking about a staging site, and not a release site, there is usually little reason to be overly concerned about security. As a result, I simply give myself full rights to copy files to the site:

    sudo chown charlie:charlie /var/www/bc
    
This is a more flexible way to say the same thing:

    sudo chown $USER:$USER /var/www/bc

Before running **chown** we can use the list (ls) command to see that **/var/www/bc** is owned by root:

    charlie@mongovbox:~$ ls -l /var/www/
    total 12
    drwxr-xr-x  5 root    root    4096 Mar 10 14:39 bc
    -rw-r--r--  1 root    root     177 Feb 14 23:10 index.html
    
Next we run **chown** and check the results with the list command:

    charlie@mongovbox:~$ sudo chown $USER:$USER /var/www/bc
    charlie@mongovbox:~$ ls -l /var/www/
    total 12
    drwxr-xr-x 5 charlie charlie 4096 Mar 10 14:39 bc
    -rw-r--r-- 1 root    root     177 Feb 14 23:10 index.html
	
# Links

- [S3 Docs on AWS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html)
- [AWS Pricing](http://aws.amazon.com/pricing/s3/)
