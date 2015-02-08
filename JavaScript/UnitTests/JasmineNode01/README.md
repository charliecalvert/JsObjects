# Jasmine One

There are multiple ways to run this project. To get started, read the JsObjects README and learn how to install Jasmine, Jasmine-Node and Jasmine-Npm:

- <https://github.com/charliecalvert/JsObjects/blob/master/README.md>
- <http://www.elvenware.com/charlie/development/web/UnitTests/>
- <http://www.elvenware.com/charlie/development/web/JavaScript/NodeJs.html>

If you have everything set up right you can run the tests with either of these commands, where the first is the most informative:

	jasmine-node --verbose --matchall Spec/
	jasmine
 
## Start a web server

You also view the results in a web browser. First start a web server:


    python3 -m http.server 30025

Then browse to this address:

- <http://localhost:30025/>
