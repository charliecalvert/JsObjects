
/*
 * GET users listing.
 */

exports.list = function(req, res){
	'use strict';
	res.send(req.session);
};