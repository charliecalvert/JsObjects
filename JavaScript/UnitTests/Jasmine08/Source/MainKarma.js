/**
 * @author Charlie Calvert
 */

// This is safe, but not very flexible: 
var tests = ['SimpleTest', 'TestFunctionObject', 'TestNumbers', 'ThrowTests'];

/*
 * Below, in comments, is a more dangerous but more flexible way to create the array 
 * of tests to run. It does work as is for me on Linux, but I won't include it here
 * as the default because I don't trust it. However, you should try it as it is 
 * a better solution since it does not involve hard-coding the test names.
 */

/* var tests = [];
for (var file in window.__karma__.files) {	
	if (window.__karma__.files.hasOwnProperty(file)) {				
		if (/Spec/.test(file)) {
			console.log("The test: " + file);
			file = file.substring(0, file.length-3)
			var files = file.split('/');						
			tests.push(files[files.length-1]);			
		}
	}	
} */

requirejs.config({
	// Karma serves files
	baseUrl : '.',

	// Require.js will load these tests
	deps : tests,

	// start test run, once Require.js is done
	callback : window.__karma__.start
});
