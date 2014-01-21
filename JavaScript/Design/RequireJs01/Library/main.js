/**
 * @author Charlie Calvert
 */

/* require.config({
  paths: {
    jasmine: 'jas/jasmine',
    jasmineHtml: 'jas/jasmine-html',
    boot: 'jas/boot',
    getEight: 'spec/getEight',
    test: 'spec/test02.spec'
  }

}); */

define(function(require) {	
	console.log('foo');
	var getNums = require('GetNine');
	console.log(getNums.getNine());
	console.log(getNums.getEight());
	var convert = require('Convert');
	console.log(convert.feetInMile);
	console.log(convert.milesToFeet(1));
	console.log(convert.milesToFeet(2));
	console.log(convert.milesToFeet(10));
});


// "Library/jas/jasmine.js", "Library/jas/jasmine-html.js", 
// 	"Library/jas/boot.js",