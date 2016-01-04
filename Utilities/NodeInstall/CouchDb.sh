# sudo apt-get install couchdb -y

# See this page: https://launchpad.net/~couchdb/+archive/ubuntu/stable

# install the ppa-finding tool
# for 12.04 release
sudo apt-get install python-software-properties -y
# for 14.04 release
sudo apt-get install software-properties-common -y
# add the ppa
sudo add-apt-repository ppa:couchdb/stable -y
# update cached list of packages
sudo apt-get update -y
# remove any existing couchdb binaries
sudo apt-get remove couchdb couchdb-bin couchdb-common -yf
# see my shiny goodness - note the version number displayed and ensure its what you expect
sudo apt-get install -V couchdb
#  Reading package lists...
#  Done Building dependency tree
#  Reading state information...
#  Done
#  The following extra packages will be installed:
#  couchdb-bin (x.y.z0-0ubuntu2) couchdb-common (x.y.z-0ubuntu2) couchdb (x.y.z-0ubuntu2)
# … Y …

# manage via upstart
# sudo stop couchdb
#  couchdb stop/waiting
# update /etc/couchdb/local.ini with 'bind_address=0.0.0.0' as needed
sudo start couchdb
#  couchdb start/running, process 3541

