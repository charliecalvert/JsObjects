/************************************
 * Users
 ************************************/

function elfFireShowCurrentUser() {
    const user = firebase.auth().currentUser;
    let userName;
    let userEmail;
    let userPhotoUrl;
    let userId;

    if (user !== null) {
        userName = user.displayName;
        userEmail = user.email;
        userPhotoUrl = user.photoURL;
        userId = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    $('#userName').html(userName);
    $('#userEmail').html(userEmail);
    $('#userPhotoUrl').html(userPhotoUrl);
    $('#userId').html(userId);
    $('#userImg').attr('src', userPhotoUrl);
}