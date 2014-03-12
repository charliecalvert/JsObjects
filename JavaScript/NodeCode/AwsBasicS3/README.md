AwsBasicS3
==========

An example of how to use Node JS to upload files to S3.

## Set Up

You need to be sure you have the environmonent variables JSOBJECTS and PYTHON path set up correctly. I have the following at the bottom of my .bashrc file:

    export JSOBJECTS=$HOME/Git/JsObjects/
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

## The Config File

Note that you will need to edit config.json to include your
AWS key. Note also that you will need to edit the options
found in Server.js.

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
	
	
# Links

- [S3 Docs on AWS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html)
- [AWS Pricing](http://aws.amazon.com/pricing/s3/)
