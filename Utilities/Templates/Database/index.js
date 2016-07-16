var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
  // Passport added the this method to the request object.
  console.log('isAuthenticated called');
  if (req.isAuthenticated()) {
    console.log('successfully authenticated');
    return next();
  }

  console.log('in isAuthenticated, user not authenticate, send to login');
  res.redirect('/login');
};

module.exports = function (passport) {
  /* GET home page. */
  router.get('/', isAuthenticated, function (req, res, next) {
    'use strict';
    console.log('about to send root page');
    res.render('index', {title: 'BarFoo'});
  });

  function foo(req, res, next) {
    console.log('calling login');
    next();
  }

  router.get('/login', function (req, res, next) {
    console.log('in get login');
    res.render('login', {title: 'Elf Login', user: req.user, });
  });

  router.post('/loginUser', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

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