@ECHO OFF

if "%PYTHONPATH%"=="" goto usage


ECHO Your set up looks good.
ECHO PYTHONPATH=%PYTHONPATH%
goto :eof

:usage
ECHO =============================================
ECHO ====== Batch Files in This Directory ========
ECHO =============================================
ECHO Some of the scripts in this folder expect
ECHO the PYTHONPATH variable to be set
ECHO ---------------------------------------------
ECHO Before you run this script, set PYTHONPATH to 
ECHO to include elfutils.
ECHO ---------------------------------------------
ECHO You can set the PYTHONPATH by using the 
ECHO ENVIRONMENT VARIABLES dialog. To get to 
ECHO that dialog:
ECHO   Control Panel\System and Security\System
ECHO   Advanced System Settings\Environment Vars
ECHO ---------------------------------------------
ECHO Alternatively you can set them temporarily 
ECHO at the command prompt like this:
ECHO   set PYTHONPATH=..\..\Python\PythonUtils
ECHO =============================================