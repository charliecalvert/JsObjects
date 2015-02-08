/**
 * @author Charlie Calvert
 */

var tests = [];


for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\/.*Test.js$/.test(file)) {
			console.log("The test: " + file);
			file = file.substring(0, file.length-3);
			var files = file.split('/');
			tests.push(files[files.length-1]);
		}
	}
} 

requirejs.config({
	
    // Karma serves files     
    baseUrl: '/base/Spec',
    
    paths: {
        'GetNumber': '../Source/GetNumber'
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
