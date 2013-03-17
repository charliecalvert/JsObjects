@ECHO OFF

if "%ELF_USER%"=="" goto usage
if "%ELF_IP%"=="" goto usage
if "%ELF_PRIVATE_KEY_NAME%"=="" goto usage
if "%ELF_PRIVATE_KEY_DIR%"=="" goto usage

ECHO Your set up looks good.
ECHO ELF_USER=%ELF_USER%
ECHO ELF_IP=%ELF_IP%
ECHO ELF_PRIVATE_KEY_NAME=%ELF_PRIVATE_KEY_NAME%
ECHO ELF_PRIVATE_KEY_DIR=%ELF_PRIVATE_KEY_DIR%
goto :eof

:usage
ECHO =============================================
ECHO ====== Batch Files in This Directory ========
ECHO =============================================
ECHO Some of the scripts in this folder expect
ECHO two environment variables on your system
ECHO to be set. They are called ELF_USER and
ECHO ELF_IP.
ECHO ---------------------------------------------
ECHO Before you run this script, set ELF_USER 
ECHO and ELF_IP. Your ELF_IP might be your 
ECHO elastic ip if you are using EC2. Otherwise
ECHO it is probably the IP of your remote system.
ECHO ---------------------------------------------
ECHO You can set ELF_USER and ELF_IP by using the 
ECHO ENVIRONMENT VARIABLES dialog. To get to 
ECHO that dialog:
ECHO   Control Panel\System and Security\System
ECHO   Advanced System Settings\Environment Vars
ECHO ---------------------------------------------
ECHO Alternatively you can set them temporarily 
ECHO at the command prompt like this:
ECHO   set ELF_USER=MyUserName
ECHO   set ELF_IP=MyRemoteIp
ECHO   set ELF_PRIVATE_KEY_DIR=MyPrivateKeyDirectory
ECHO   set ELF_PRIVATE_KEY_NAME=FileNameOfPrivateKey
ECHO For instance:
ECHO   set ELF_USER=charlie
ECHO   set ELF_IP=192.168.2.3
ECHO   set ELF_PRIVATE_KEY_NAME=CharlieMainKey.pem
ECHO   SET ELF_PRIVATE_KEY_DIR=C:\Users\charles.calvert\documents\Data\Putty\
ECHO =============================================