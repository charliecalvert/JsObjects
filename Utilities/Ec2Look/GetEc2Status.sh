echo ID:
curl http://169.254.169.254/latest/meta-data/instance-id
echo
echo uname:
uname -n
echo
echo Listing of var/www:
ls -la /var/www
echo Listing of dropbox
ls -a ~/.dropbox-dist/libwx*
echo Git status
which git
echo Listing of /etc/mediawiki
ls -la /etc/mediawiki

