
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.page02 = function(req, res){
  res.render('page02', { title: 'Page02' });
};