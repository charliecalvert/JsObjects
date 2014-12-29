/**
 * @author Charlie Calvert
 */

var tests = ['SimpleTest', 'NumberTest'];
for (var file in window.__karma__.files) {
    console.log(file);
}

requirejs.config({
    // Karma serves files     
    baseUrl: './',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
