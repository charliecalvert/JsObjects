@ECHO OFF

set HOME=%USERPROFILE%
set CGITDIR=C:\Src\Git
set GITDIR=D:\Git
set GIT_HUB_IO=%GITDIR%\charliecalvert.github.io
set ELFSITE=%GITDIR%\elfsite
set ELF_CONTENT=%USERPROFILE%\Content
set JSOBJECTS=%GITDIR%\JsObjects
set ELF_TEMPLATES=%JSOBJECTS%\Utilities\Templates

call doskey.exe snm=move d:\Temp\node_modules .
call doskey.exe dnm=move node_modules d:\Temp\.

call doskey.exe isit=cd %CGITDIR%\Isit322-2015
call doskey.exe hist=cd %CGITDIR%\historycode
call doskey.exe elfsite=cd %ELFSITE%\Code
call doskey.exe gitio=cd %GITDIR%\charliecalvert.github.io

call doskey.exe cn=cd %GITDIR%\CloudNotes
call doskey.exe p2=cd %GITDIR%\Prog219-2015
call doskey.exe p2c=cd %GITDIR%\prog219-calvert
call doskey.exe home=cd %USERPROFILE%
call doskey.exe gitdir=cd %GITDIR%
call doskey.exe gd=cd %GITDIR%
call doskey.exe batch=cd %CGITDIR%\Batch
call doskey.exe sshadd=pageant %USERPROFILE%\Documents\Data\Putty\HOME-2015-06.ppk

call doskey.exe jo=cd %GITDIR%\JsObjects
call doskey.exe jod=cd %GITDIR%\JsObjects\Data
call doskey.exe joj=cd %GITDIR%\JsObjects\JavaScript
call doskey.exe jou=cd %GITDIR%\JsObjects\Utilities
call doskey.exe jot=cd %GITDIR%\JsObjects\JavaScript\UnitTests

call doskey.exe wt=cd %GITDIR%\Writing
call doskey.exe wta=cd %GITDIR%\Writing\Tech\AaCode
call doskey.exe wtt=cd %GITDIR%\Writing\Tech
call doskey.exe wtp=cd %GITDIR%\Writing\Tech\Programmable
call doskey.exe wtsp=cd %GITDIR%\Writing\Tech\Games\SpiritPath
call doskey.exe wtu=cd %GITDIR%\Writing\UnitTests\Js
call doskey.exe wtg=cd %GITDIR%\Writing\Tech\Games\ThreePointerLock

