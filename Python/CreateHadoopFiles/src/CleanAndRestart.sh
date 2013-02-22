# Any time you shut down Hadoop altogether, and particularly if you
# shut down the machine it is on, you really ought to clean out the 
# temp files and reformat the drive for the distributed file system, 
# which means you lose all your data.
sudo rm -r /app/hadoop/tmp/
sudo mkdir -p /app/hadoop/tmp
sudo chown -R hadooper:hadoop /app/hadoop/tmp
/usr/local/hadoop/bin/hadoop namenode -format
