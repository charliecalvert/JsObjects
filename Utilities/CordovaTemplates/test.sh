if [ -n "$JAVA_HOME" ] 
then
  echo "JAVA_HOME set"
else
  echo "JAVA_HOME not set"
  exit
fi

if [ -n "$ANT_HOME" ]
then   echo "ANT_HOME set"
else
  echo "ANT_HOME not set"
  exit
fi

if [ -n "$PHONEGAP_HOME" ]
then   echo "PHONEGAP_HOME set"
else
  echo "PHONEGAP_HOME not set"
  exit
fi

if [ -n "$ANDROID_SDK_HOME" ]
then   echo "ANDROID_SDK_HOME set"
else
  echo "ANDROID_SDK_HOME not set"
  exit
fi

