var login = require('./login');
var signup = require('./signup');
var User = require('../models/user');

module.exports = function(passport) {
    'use strict';

    // Passport needs to be able to serialize and deserialize
    // users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:', user);
            done(err, user);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    console.log('About to pass in passport to login and signup passport.init');
    login(passport);
    signup(passport);
    console.log('Finished calling signup in passport.init');
};
