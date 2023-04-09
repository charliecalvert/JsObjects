// Initialize Firebase

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

function elfConfigure() {
    const config = {
        YOUR FIREBASE CONFIG API-KEY OBJECT HERE
        GO TO FIREBASE CONSOLE, FIND YOUR PROJECT, SELECT "Add Firebase to your webapp"
    };
    firebase.initializeApp(config);
    document.getElementById('elf-sign-in').addEventListener('click', toggleSignIn, false);
    document.getElementById('elf-sign-in').disabled = false;
}


function elfSignIn() {

    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            var token = result.credential.accessToken;
            console.log(JSON.stringify(token));
            console.log(result.user);
        }

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
        } else {
            console.error(error, errorMessage);
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var photoURL = user.photoURL;
            document.getElementById('elf-sign-in').textContent = 'Sign out';
            document.getElementById('elf-user').textContent = displayName;
            document.getElementById("elfPhoto").src = photoURL;
        } else {
            // User is signed out.
            document.getElementById('elf-sign-in').textContent = 'Sign in with Google';
            document.getElementById('elf-user').textContent = 'null';
            document.getElementById("elfPhoto").src = "favicon.png";
        }
        document.getElementById('elf-sign-in').disabled = false;
    });

}



document.addEventListener('DOMContentLoaded', function () {

    try {
        elfConfigure();
        elfSignIn();
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});

