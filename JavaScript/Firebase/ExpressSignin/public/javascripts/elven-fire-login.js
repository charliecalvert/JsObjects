// Initialize Firebase and sign in Redirect

document.addEventListener('DOMContentLoaded', function () {
    try {
        elfConfigure();
        elfSignIn();
        document.getElementById('load').innerHTML = 'Firebase App Loaded';
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});

/**
 * Function called when clicking the Login/Logout button.
 */
function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithRedirect(provider);
    } else {
        firebase.auth().signOut();
    }
    document.getElementById('elf-sign-in').disabled = true;
}

// const fbConfig = require('./configuration.js');

function elfConfigure() {

    // const fbConfig = require('./configuration.js');
    /* const config = {
       YOUR FIREBASE CONFIG API - KEY OBJECT HERE
       GO TO FIREBASE CONSOLE, FIND YOUR PROJECT,
       SELECT "Add Firebase to your webapp"
       COPY THE OBJECT HERE OR PUT IT IN A FILE
       CALLED configuration.js
       THAT IS IN THE SAME DIRECTORY AS THIS FILE.
       Exposing this is not a security risk, but you
       want to use your own database, not mine.
       @see /views/layout.pug
       @see /public/javascripts/.gitignore
    }; */
    firebase.initializeApp(config);
    document.getElementById('elf-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('elf-sign-in').disabled = false;
}


function elfSignIn() {

    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            var token = result.credential.accessToken;
            console.log(JSON.stringify(token));
            document.getElementById('elf-sign-in').textContent = 'Sign out';
        }
        var user = result.user;
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.' + credential);
        } else {
            console.error(error);
            console.error(errorMessage);
            console.error(email);
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var photoURL = user.photoURL;
            document.getElementById('elf-sign-in-status').textContent = 'Signed in';
            document.getElementById('elf-sign-in').textContent = 'Sign out';
            document.getElementById('elf-user').textContent = displayName;
            document.getElementById('elf-details').textContent = email;
            document.getElementById("elfPhoto").src = photoURL;
            //document.getElementById('elf-details').textContent = JSON.stringify(user, null, '  ');
        } else {
            // User is signed out.
            document.getElementById('elf-sign-in-status').textContent = 'Signed out';
            document.getElementById('elf-sign-in').textContent = 'Sign in with Google';
            document.getElementById('elf-user').textContent = 'null';
            document.getElementById('elf-details').textContent = 'null';
            document.getElementById("elfPhoto").src = "favicon.png";
        }
        document.getElementById('elf-sign-in').disabled = false;
    });

}

