Using Protractor
==========

The unit tests for this project require protractor and the selenium web drive. 

-	[Protractor](https://github.com/angular/protractor)
-	[Selenium](https://npmjs.org/package/selenium-webdriver)
-	[ChomeDrive](http://chromedriver.storage.googleapis.com/index.html)
-	[Learn to write test](https://github.com/angular/protractor/blob/master/docs/getting-started.md)

To install protractor, type:

	npm install -g protractor

To install selenium, type:

	npm install

Download ChromeDriver and put it on your path.

You'll have to download the selenium server for yourself. It is too big
to include with this project, and it is changing fairly often. Once
you have downloaded the Jar file, make sure you have Java installed:

-	[Install Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

You want the JDK rather than the smaller JRE. Perhaps the JDK is overkill for this 
project, but install it anyway, as we will have other reasons to use it.

Now start the server:

	java -jar selenium-server-standalone-2.37.0.jar
	
If you are curious, you can browse to: http://127.0.0.1:4444/wd/hub. 
But that is not the point. We just need to have that server running
as a host for our tests. 

We now need to start our app running in its own web server. For 
instance, we might use the one provided by Eclipse. So start your
web page in Eclipse just as you would normally. In this case, 
the page you want to test might be at this address:

	<http://127.0.0.1:8020/AngularInclude01/index.html>

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



