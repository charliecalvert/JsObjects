/*
 * This file contains edited copies of boilerplate code given by Firebase
 * to help with logging in and out. I have made a few change , and moved
 * them into this file so that they are easier to use. I also added
 * configuration.js to the .gitignore file so that I don't accidentally
 * commit my configuration.js file to GitHub. You should do the same.
 * @see assets/.gitignore to see that configuration.js is not included
 * @see assets/configuation.js for the firebaseConfig object
 * References:
 * @see https://firebase.google.com/docs/auth/web/start
 * @see https://firebase.google.com/docs/auth/web/manage-users
 * @see https://firebase.google.com/docs/auth/web/password-auth
 * @see https://firebase.google.com/docs/auth/web/google-signin
 * @see https://firebase.google.com/docs/auth/web/facebook-login
 * @see https://firebase.google.com/docs/auth/web/github-auth
 * @see https://firebase.google.com/docs/auth/web/twitter-login
 */

import { firebaseConfig } from './assets/configuration.js';
/* import createDebugMessages from 'debug';
const debug = createDebugMessages('source:elf-firebase');

debug('firebaseConfig', firebaseConfig); */
console.log('firebaseConfig', firebaseConfig);

/* const firebaseConfig = {
    apiKey: 'YOUR CONFIG HERE',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
}; */

// Initialize Firebase
// indow.firebase.initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebase = getAuth(initializeApp(firebaseConfig));
// import { getAnalytics } from 'firebase/analytics';

const app = initializeApp(firebaseConfig);
console.log('app', app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
if (auth.currentUser) {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    auth.signInWithRedirect(provider);
} else {
    auth.signOut();
}
// 66document.getElementById('elf-sign-in').disabled = true;

const initApp = function(callback) {
    window.elvenFireBaseData = {};
    auth.onAuthStateChanged(
        function(user) {
            if (user) {
                // User is signed in.
                const efdata = window.elvenFireBaseData;
                efdata.displayName = user.displayName;
                efdata.email = user.email;
                efdata.emailVerified = user.emailVerified;
                efdata.photoURL = user.photoURL;
                efdata.uid = user.uid;
                efdata.phoneNumber = user.phoneNumber;
                efdata.providerData = user.providerData;

                // getIdToken passes accessToken to it's call back
                // but I don't include it since we don't use it
                user.getIdToken().then(function() {
                    document.getElementById('sign-in-status').textContent =
                        'Signed in';
                    document.getElementById('sign-in').textContent = '';
                });
            } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent =
                    'Status: Signed out';
                document.getElementById('sign-in').textContent = '';
                document.getElementById('account-details').textContent = '';
                // document
                //   .getElementById('sign-out')
                //   .style.visibility = 'hidden';
            }
            callback();
        },
        function(error) {
            console.log(error);
        },
    );
};

export { initApp, auth };

/*
window.addEventListener('load', function() {
    initApp();
});
*/
