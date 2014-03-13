@ECHO OFF

ECHO =========================
REM SetX GITHUB %USERPROFILE%\Documents\GitHub
Setx GITHUB C:\Src\Git
SetX JSOBJECTS %GITHUB%\JsObjects

set BASE=%JSOBJECTS%\Python
SetX PYTHONPATH %BASE%;%BASE%\Utils;%BASE%\RegEx;
ECHO =========================
ECHO GITHUB = %GITHUB%
ECHO JSOBJECTS = %JSOBJECTS%
ECHO PYTHONPATH = %PYTHONPATH%
ECHO =========================
ECHO You will need to restart this command window 
ECHO before these variables take effect.
ECHO =========================