#!/usr/bin/env python3

# sudo a2enmod cgi
# sudo chmod 755 py01.py 
# sudo service apache2 restart
# sudo nano conf-available/serve-cgi-bin.conf
# sudo pip3 install pymysql
# mysql -u root -p --database example
# /usr/lib/cgi-bin/
# /etc/apache2

import cgi
import cgitb
cgitb.enable()  # for troubleshooting

print("Content-type: text/html;charset=utf-8")
print()

print("""
<html>

<head><title>Sample CGI Script</title></head>

<body>

  <h1> Sample CGI Script </h1>

</body>

</html>
""")
