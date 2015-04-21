REM @ECHO OFF

for %%X in (git.exe) do (set FOUND=%%~$PATH:X)
if defined FOUND echo "Bar Found: %FOUND%" 

set RESULTS=Results.txt

where git.exe > %RESULTS%
where node.exe >> %RESULTS% 
where npm.cmd >> %RESULTS% 
where geany.exe >> %RESULTS% 
where notepad++.exe >> %RESULTS% 

type %RESULTS% 

@ECHO OFF

REM C:\Users\charlie\AppData\Roaming\npm;
REM C:\Program Files (x86)\Geany\bin;
REM C:\Program Files (x86)\Notepad++
