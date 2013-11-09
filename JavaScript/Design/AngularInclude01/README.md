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

Start the server:

	java -jar selenium-server-standalone-2.37.0.jar
	
Now browse to: http://127.0.0.1:4444/wd/hub

Example run: protractor --seleniumAddress http://localhost:4444/wd/hub --specs Test01.js

But we can use our protractorConfig.js file included in this project:

	protractor protractorConfig.js
	


 



