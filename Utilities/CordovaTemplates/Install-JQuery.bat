@ECHO OFF
IF NOT DEFINED JAVA_HOME GOTO MISSING_HOME
IF NOT DEFINED ANT_HOME GOTO MISSING_HOME
IF NOT DEFINED PHONEGAP_HOME GOTO MISSING_HOME
IF NOT DEFINED ANDROID_SDK_HOME GOTO MISSING_HOME

FOR %%X in (java.exe javac.exe ant.bat android.bat) do (
    SET FOUND=%%~$PATH:X	
    IF NOT DEFINED FOUND GOTO MISSING
)
SET PROJECT=%PHONEGAP_HOME%\lib\android\bin\templates\project
SET ASSETS=%PROJECT%\Assets
ECHO %PROJECT%
IF NOT EXIST %PROJECT% (
	echo Can't find Phone GAP Project folder. Cannot continue. Exiting
	EXIT /B 1
) 

IF EXIST %ASSETS% (
	echo Deleting ASSETS folder: %ASSETS%
	rd /q /s %ASSETS%
	echo Copying new Assets folder
	IF NOT EXIST %ASSETS% (
		mkdir %ASSETS%
	)
	Robocopy JQueryMobile\Assets %PROJECT%\Assets /MIR /Z
)
rem cscript "%~dp0\create.js" %*
GOTO END

:MISSING_HOME
ECHO Missing one of the following:
ECHO JAVA_HOME - %JAVA_HOME%
ECHO ANT_HOME - %ANT_HOME%
ECHO PHONEGAP_HOME - %PHONEGAP_HOME%
ECHO ANDROID_SDK_HOME - %ANDROID_SDK_HOME%
EXIT /B 1

:MISSING
ECHO Missing one of the following:
ECHO JDK: http://java.oracle.com
ECHO Android SDK: http://developer.android.com
ECHO Apache ant: http://ant.apache.org
EXIT /B 1
:END
