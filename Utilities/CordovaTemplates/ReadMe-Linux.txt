Here is how I set up my environment. I placed the following at the
end of my .profile file. You could also put it at the end of .bashrc,
if you only need it in your bash shell.

# Set CSC variables
export ANT_HOME=/usr/share/ant
export JAVA_HOME=/usr/lib/jvm/default-java
export ANDROID_SDK_HOME=/home/charlie/Dev/Eclipse/sdk
export PHONEGAP_HOME=/home/charlie/Dev/phonegap-2.3.0

PATH="$ANDROID_SDK_HOME/tools:$ANDROID_SDK_HOME/platform-tools:$PHONEGAP_HOME/lib/android/bin:$PATH"


Then here is the mechanism for moving the assets folder into the right location:

ln -s JQueryMobile/Assets /home/charlie/Dev/phonegap-2.3.0/lib/android/bin/templates/project/assets
