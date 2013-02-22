function MainMenu 
{
	while : 
	do
		clear
		echo ""
		echo "-----------------------------------------"
		echo "---------------Main Menu-----------------"
		echo "-----------------------------------------"
		echo "Select an option:"
		echo "----------------------------------"
		echo ""
		echo "        1. Show /user/hadooper"
		echo "        2. Show /user/hadooper/gutenberg"
		echo "        3. Display results"
		echo "        4. Display safemode"
		echo "        5. Exit"
		echo ""
		read -r -p "Type in the desired option: " USR_CHOICE
		case $USR_CHOICE in
			1|"1"|one|One)
				echo "You choose option 1";
				/usr/local/hadoop/bin/hadoop dfs -ls /user/hadooper
				exit 1;;
			2)	echo "You choose option 2";
				/usr/local/hadoop/bin/hadoop dfs -ls /user/hadooper/gutenberg
				exit 1;;
			3)	echo "You choose option 3";
				/usr/local/hadoop/bin/hadoop dfs -cat /user/hadooper/gutenberg-output/part-r-00000
				exit 1;;
			4)	echo "You choose option 4";
				/usr/local/hadoop/bin/hadoop dfsadmin -safemode get
				exit 1;;
			5) 	echo "Goodbye";
				exit 1;;
		esac
	done	
}

MainMenu
