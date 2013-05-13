README - SwitchCanvas
---------------------------------

The code for the third button makes an Ajax call back to the server. If you 
launched index.html by just clicking on it from Windows explorer, then it is 
not run from a web server, and therefore the Ajax calls (like the one started 
by the third button) will not work.

Here is the difference in the URL found in the address bar when you 
start a program from a web server, and from clicking on it in the 
Windows explorer:

- file:///G:/Src/GitHub/JsObjects/HtmlCssJavascript/SwitchCanvas/index.html
- http://127.0.0.1:8020/SwitchCanvas/index.html

The first case is what you see when double click on an HTML file, the second 
is when you launch index.html through a web server, such as the one built into 
Chrome. If you use the web server, the example should work as expected.