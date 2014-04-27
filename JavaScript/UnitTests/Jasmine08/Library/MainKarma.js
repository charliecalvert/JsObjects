/**
 * @author Charlie Calvert
 */

var tests = ['/base/Library/spec/TestFunctionObject.js'];
for (var file in window.__karma__.files) {
	console.log("The file: " + file);
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Test*.\.js$/.test(file)) {
			console.log("The test: " + file);
			tests.push(file);
		}
	}
	
}

requirejs.config({
	// Karma serves files
	baseUrl : '',

 	paths: {
        objectMethod: 'spec/GetNumber',
        FunctionObject: 'spec/GetFunction'
    },
    
	// ask Require.js to load these files (all our tests)
	deps : tests,

	// start test run, once Require.js is done
	callback : window.__karma__.start
});
