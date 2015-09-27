/**
 * Created by charlie on 6/11/2015.
 */

var express = require('express');
var router = express.Router();

module.exports = function(passport) {

	router.post('/login', passport.authenticate('login'),
		function(req, res) {
			res.send(req.user);
		}
	);

	router.get('/logout', function(request, response){
		request.logOut();
		response.sendStatus(200);
	});

	router.get('/loggedin', function(request, response) {
		response.send(request.isAuthenticated() ? true : false);
	});

	router.get('/signup', function(req, res) {
		console.log('Get signup');
		res.render('register', {});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/#/login',
		failureRedirect: '/signup'
	}));


	return router;
};