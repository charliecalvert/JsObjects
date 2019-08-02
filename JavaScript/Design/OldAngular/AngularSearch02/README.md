Angular Search
==============


Set up Protractor as explained here:

- <http://elvenware.com/charlie/development/web/UnitTests/Protractor.html>

We now need to start our app running in its own web server. For 
instance, we might use the one provided by Aptana/Eclipse. So start your
web page in Aptana just as you would normally. In this case, 
the page you want to test might be at this address:

	<http://127.0.0.1:8020/AngularSearch/index.html>

If you want, we can now run protractor from the command line. Here is
an example run: 

	protractor --seleniumAddress http://127.0.0.1:4444/wd/hub --specs Test01.js

But we can use our protractorConfig.js file included in this project:

	protractor protractorConfig.js
	
In either case the result should look something like this:

	> protractor --seleniumAddress http://127.0.0.1:4444/wd/hub --specs Test01.js
	Using the selenium server at http://127.0.0.1:4444/wd/hub
	...
	
	Finished in 4.062 seconds
	3 tests, 3 assertions, 0 failures	
	


I have also include ProtractorSimpleConfig.js and SimpleTest.js in
this folder. These are from the folks at protractor. They might
prove useful, as they provide a simple starting test.

