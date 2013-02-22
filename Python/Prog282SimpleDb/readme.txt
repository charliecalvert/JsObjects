This project allows you to access AWS SimpleDb from a Python script
that is called from an HTML file. The script called Deploy.sh will
automatically copy the file to the right directory on Ubuntu and Mint
versions of Linux and give the files the right permissions.

Be sure boto is installed:

https://github.com/boto/boto

Be sure to give Deploy.sh executable permissions

chmod +x Deploy.sh

Be sure crlf.py is in ~/bin and has executable permissions. crlf.py is
part of andelf and is found in this folder: ../andelf/Python/PythonUtils

In the scripts folder, put your key in the already existing .boto file.

Run Deploy.sh:

./Deploy.sh

Go to your browser and run the program:

http://localhost/simple/simpledb.html


