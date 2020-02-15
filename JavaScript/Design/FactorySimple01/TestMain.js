/**
 * @author Charlie Calvert
 */

var tests = [];
for (var file in window.__karma__.files) {
    // console.log(file);
    if (/Tests\.js$/.test(file)) {
        console.log('Testing: ' + file);
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/base/public',
    paths: {
        SailBoatFactory: 'javascripts/SailBoatFactory',
        Sloop: 'javascripts/Sloop',
        Yawl: 'javascripts/Yawl'
    },
    shim: {},
    deps: tests,
    callback: window.__karma__.start
});
