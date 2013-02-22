cd
mkdir Downloads
cd Downloads
wget http://apache.cs.utah.edu//hadoop/common/hadoop-1.0.1/hadoop-1.0.1.tar.gz
tar xzf hadoop-1.0.1.tar.gz
sudo mv hadoop-1.0.1 /usr/local/hadoop
sudo chown -R hadooper:hadoop /usr/local/hadoop
export JAVA_HOME=/usr/lib/jvm/java-6-sun
