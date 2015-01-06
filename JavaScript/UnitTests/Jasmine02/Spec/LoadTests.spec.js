
require.config({
	baseUrl: './',
    paths: {
        GetNumber: '../Source/GetNumber'
    }
});

require(['SimpleTest', 'NumberTest'], function(getNumber) {
    'use strict';

    return {};
});
