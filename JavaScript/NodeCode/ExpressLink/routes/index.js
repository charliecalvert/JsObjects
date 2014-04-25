/*
 * GET home page.
 */

exports.index = function(req, res) {
    'use strict';
    res.render('index', {
        title: 'Express'
    });
};

exports.page02 = function(req, res) {
    'use strict';
    res.render('page02', {
        title: 'Page02'
    });
};
