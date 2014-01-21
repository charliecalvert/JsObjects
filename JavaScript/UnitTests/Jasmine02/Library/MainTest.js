/**
 * @author Charlie Calvert
 */
require.config({
  paths: {
    jasmine: 'jas/jasmine',
    jasmineHtml: 'jas/jasmine-html',
    boot: 'jas/boot',
    getEight: 'spec/getEight',
    test: 'spec/test02.spec'
  },
  shim: {
  	jasmine: {
  		exports: 'jasmine'
  	},
  	jasmineHtml: {
  		deps: ['jasmine'],
  		exports: 'jasmine'
  	},
  	boot: {
  		deps: ['jasmine', 'jasmineHtml'],
  		exports: 'jasmine'
  	}
  },
});


require(['boot'], function(jasmine) {
	console.log('Boot jasmine');
	
	require(['test'], function() {
		window.onload();
	});
}); 

