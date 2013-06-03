
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send(req.session);
};