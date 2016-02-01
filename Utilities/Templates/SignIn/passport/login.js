var LocalStrategy   = require('passport-local').Strategy;
var userModel = require('../models/user');
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

module.exports = function(passport) {

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, userName, password, done) {
            // check in mongo if a user with username exists or not
            console.log('In passport login: ', userName, password);
            console.log('Ready state', mongoose.connection.readyState);
            userModel.findOne({ 'username' :  userName },
                function(err, user) {
                    // In case of any error, return using the done method
                    if (err) {
                        console.log("error", err);
                        return done(err);
                    }

                    console.log('In passport login callback the user: ', user);

                    // Username does not exist, log the error and redirect back
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false);
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    console.log("Login successful");
                    return done(null, user);
                }
            );

        })
    );


    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
    
};