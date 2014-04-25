
/*
 * GET home page.
 */

exports.index = function(request, response){'use strict';
  response.render('index', { title: 'Expresser' });
};