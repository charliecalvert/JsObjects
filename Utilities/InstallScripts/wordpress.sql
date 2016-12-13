create database if not exists wordpress;
use wordpress

GRANT ALL PRIVILEGES ON wordpress.* TO "root"@"localhost" IDENTIFIED BY "foobar";
FLUSH PRIVILEGES;
show grants for 'root'@'localhost';
