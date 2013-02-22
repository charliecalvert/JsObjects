echo "Stopping Hadoop"
bash /usr/local/hadoop/bin/stop-mapred.sh
bash /usr/local/hadoop/bin/stop-dfs.sh
echo "Refreshing and reformatting file system"
bash CleanAndRestart.sh
echo "Run ClearAndRestart on slave machines"
read -p "Press [Enter] key to re-start hadoop..."
bash /usr/local/hadoop/bin/start-dfs.sh
bash /usr/local/hadoop/bin/start-mapred.sh
