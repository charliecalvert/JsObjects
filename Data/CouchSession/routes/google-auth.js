/**
 * Created by charlie on 11/5/16.
 */

var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

/**************************************
 *  Google
 **************************************/

function ensureAuthenticated(req, res, next) {
    'use strict';
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/profile', ensureAuthenticated, function(request, response) {
    'use strict';
    response.render('profile-google', {
        title: 'Google Account',
        user: request.user
    });
});

function setUser(request) {
    'use strict';
    if (!request.session.login) {
        request.session.login = {};
    }
    console.log('setUser:', JSON.stringify(request.user, null, 4));
    request.session.login.type = 'google';
    request.session.login.userName = request.user.displayName;
    request.session.login.id = request.user.id;
    request.session.elfStoreData = false;
}

// At https://console.developers.google.com this key is associated with "My Project"
// Create a file like this and source it:
// export GOOGLE_CLIENT_ID=<YOUR CLIENT ID>
// export GOOGLE_CLIENT_SECRET=<YOUR CLIENT SECRET>
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            /*
             * Avoid Private IP so you don't get the the device_id device_name issue
             * for Private IP during authentication.
             * In the google cloud console set up a name http://mydomain:3000/
             * then edit your /etc/hosts local file to point on your private IP.
             */
            callbackURL: 'http://localhost:30025/google/google/callback',
            passReqToCallback: true
        },
        function(request, accessToken, refreshToken, profile, done) {
            'use strict';
            // asynchronous verification, for effect...

            process.nextTick(function() {
                // For now, return the whole profile. Later get Database info instead.
                return done(null, profile);
            });
        }
    )
);

router.get(
    '/login',
    passport.authenticate('google', {
        scope: ['profile']
    })
);

//router.get('/auth/google/callback',
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    function(request, response) {
        'use strict';
        // Successful authentication, redirect home.
        setUser(request);
        response.redirect('/');
    }
);

module.exports = router;
