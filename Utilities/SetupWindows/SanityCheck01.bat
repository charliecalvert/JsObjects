set RESULTS=Results.txt

where git.exe > %RESULTS%
where node.exe >> %RESULTS% 
where npm.cmd >> %RESULTS% 
where geany.exe >> %RESULTS% 
where notepad++.exe >> %RESULTS% 
where putty.exe >> %RESULTS%
where pageant.exe >> %RESULTS%

@ECHO OFF

echo -----------------------------------------
echo We are now going to examine %RESULTS%
echo Here is the contents of %RESULTS%
echo -----------------------------------------
type %RESULTS% 
echo -----------------------------------------
echo End %RESULTS%
echo There should be eight lines in %RESULTS%.
echo Here is how many we found:
findstr /R /N "^" %RESULTS% | find /C ":"
echo -----------------------------------------
echo ==================================
echo Testing for GIT_SSH
echo ==================================

IF NOT DEFINED GIT_SSH GOTO MISSING_HOME

GOTO END

:MISSING_HOME
ECHO You are missing something
ECHO GIT_SSH - %GIT_SSH%
EXIT /B 1

:END
ECHO Looks Good: You have these settings:
ECHO -----------------------------------------
ECHO GIT_SSH - %GIT_SSH%
ECHO -----------------------------------------