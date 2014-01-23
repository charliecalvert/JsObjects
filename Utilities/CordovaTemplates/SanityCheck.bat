@ECHO OFF
IF NOT DEFINED JAVA_HOME GOTO MISSING_HOME
IF NOT DEFINED ANT_HOME GOTO MISSING_HOME
IF NOT DEFINED PHONEGAP_HOME GOTO MISSING_HOME
IF NOT DEFINED ANDROID_SDK_HOME GOTO MISSING_HOME

ECHO Looks good.

GOTO END

:MISSING_HOME
ECHO Missing one of the following:
ECHO JAVA_HOME - %JAVA_HOME%
ECHO ANT_HOME - %ANT_HOME%
ECHO PHONEGAP_HOME - %PHONEGAP_HOME%
ECHO ANDROID_SDK_HOME - %ANDROID_SDK_HOME%
ECHO -------------------
ECHO Try one of the following locations:
ECHO Apache ant: http://ant.apache.org
ECHO Android SDK: http://developer.android.com
ECHO Cordova: http://cordova.apache.org/
ECHO JDK: http://java.oracle.com
EXIT /B 1

:END
ECHO Your system currently has these settings:
ECHO -----------------------------------------
ECHO JAVA_HOME - %JAVA_HOME%
ECHO ANT_HOME - %ANT_HOME%
ECHO PHONEGAP_HOME - %PHONEGAP_HOME%
ECHO ANDROID_SDK_HOME - %ANDROID_SDK_HOME%
ECHO -----------------------------------------
