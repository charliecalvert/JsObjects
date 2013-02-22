# This first option works on Mint Linux
# sudo add-apt-repository "deb http://archive.canonical.com/ lucid partner"
# sudo apt-get update
# sudo apt-get install sun-java6-jdk
# sudo update-java-alternatives -s java-6-sun

# This option is best on Ubuntu 11.10:
wget https://raw.github.com/flexiondotorg/oab-java6/master/oab-java6.sh -O oab-java6.sh
chmod +x oab-java6.sh
sudo ./oab-java6.sh
sudo apt-get install sun-java6-jdk
sudo update-alternatives --config java
