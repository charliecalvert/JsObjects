This project shows how to use requirejs, jasmine and karma.

To start Karma, type this:

	start karma

If it does not work, make sure you have Karma installed globally:

	npm install -g karma-cli

You may need to tell karma where chrome is. For instance, on Linux, run

	export CHROME_BIN=/usr/bin/chromium-browser

You could create a script called RunKarma.sh that compbines the two:

	export CHROME_BIN=/usr/bin/chromium-browser
	karma start

