/**
 * @author Charlie Calvert
 */

var tests = [];
for (var file in window.__karma__.files) {    
    if (/Spec\.js$/.test(file)) {
        console.log("Testing: " + file);
        tests.push(file);
    }
}
requirejs.config({
    baseUrl : '/base',
    paths : {        
        'SailorBridge' : 'public/javascripts/SailorBridge',
        'SailorExpertBridge' : 'public/javascripts/SailorExpertBridge',
        'Sloop' : 'public/javascripts/Boats/Sloop',
        'Yawl' : 'public/javascripts/Boats/Yawl',
        'Ketch' : 'public/javascripts/Boats/Ketch'
    },
    shim : {
    },
    deps : tests,
    callback : window.__karma__.start
});
