/**
 * Created by charlie on 3/1/16.
 */

var Jasmine = require('jasmine');
var customReporter = require('./custom-reporter');

var jasmineRep = new Jasmine();

//or wherever your config file is, you can use .loadConfig to pass in an object instead of a file
jasmineRep.loadConfigFile('spec/support/jasmine.json');
// add your custom reporter
jasmineRep.addReporter(customReporter);
// adds the console reporter
// jasmine.configureDefaultReporter();
jasmineRep.execute();
