Project=Cordova04
ProjectSmall=codova04
UserTemp=/home/$USER/temp

if [ ! -e $UserTemp ]
then 
	echo "Making directory"
	mkdir $UserTemp
fi

echo $UserTemp/$Project com.elvenware.$ProjectSmall $Project
create $UserTemp/$Project com.elvenware.$ProjectSmall $Project
