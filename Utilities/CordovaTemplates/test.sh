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

PS3='Please enter your choice: '
options=("jQueryMobile" "Standard" "Default" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "jQueryMobile")
		echo "you chose choice 1"
		templateDir=${PWD}/JQueryMobile/assets
		break;
            ;;
        "Standard")
		echo "you chose choice 2"
		templateDir=${PWD}/Standard/assets
		break;
            ;;
        "Default")
		echo "you chose choice 3"
		templateDir=${PWD}/Default/assets
		break;
            ;;
        "Quit")
	    exit
            break
            ;;
        *) echo invalid option;;
    esac
done



assetsDir=$PHONEGAP_HOME/lib/android/bin/templates/project/assets

if [ -e $assetsDir ]
then
	echo "Deleting Assets Dir"
	rm -r $assetsDir
	mkdir $assetsDir
fi

# echo $templateDir

cp -r $templateDir/* $assetsDir
echo Folder successfully copied.
