/*
 * This file contains edited copies of boilerplate code given by Firebase
 * to help with logging in and out. I have made a few change , and moved
 * them into this file so that they are easier to use.
 */

// Replace this code with your app's Firebase configuration
// To learn more: https://firebase.google.com/docs/web/setup#config-web-app
// To get the code shown below, go to the Firebase console. Find your app,
// find the Settings Gear, choose Project Settings, and scroll down a bit.

const firebaseConfig = {
    apiKey: "AIzaSyBQvsXRu3H4A-ikfJFkjQKVS2aVMl2Yqs4",
    authDomain: "prog270-calvert.firebaseapp.com",
    databaseURL: "https://prog270-calvert.firebaseio.com",
    projectId: "prog270-calvert",
    storageBucket: "prog270-calvert.appspot.com",
    messagingSenderId: "839059130275",
    appId: "1:839059130275:web:1dd6d418357cce12"
};
// Initialize Firebase
window.firebase.initializeApp(firebaseConfig);

const initApp = function(callback) {
    window.elvenFireBaseData = {};
    window.firebase.auth().onAuthStateChanged(
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

                // getIdToken passes accessToken to it's call back but I don't include it since we don't use it
                user.getIdToken().then(function() {
                    document.getElementById('sign-in-status').textContent = 'Signed in';
                    document.getElementById('sign-in').textContent = '';
                });
            } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent = 'Status: Signed out';
                document.getElementById('sign-in').textContent = '';
                document.getElementById('account-details').textContent = '';
                //document.getElementById('sign-out').style.visibility = 'hidden';
            }
            callback();
        },
        function(error) {
            console.log(error);
        }
    );
};

export {initApp}

/*
window.addEventListener('load', function() {
    initApp();
});
*/
