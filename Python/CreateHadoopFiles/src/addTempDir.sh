sudo mkdir -p /app/hadoop/tmp
sudo chown hadooper:hadoop /app/hadoop/tmp
export JAVA_HOME=/usr/lib/jvm/java-6-sun
python CreateScripts.py
/usr/local/hadoop/bin/hadoop namenode -format

