import React from 'react';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import { Button, Paper, Typography } from '@mui/material';

export const FirebaseLogout = function() {
    const currentUser = window.firebase.auth().currentUser;
    /**
     * Sign out of Firebase
     * @see https://firebase.google.com/docs/auth/web/password-auth#next_steps
     */
    function signOut() {
        window.firebase
            .auth()
            .signOut()
            .then(
                function() {
                    console.log('Signed Out');
                    window.location.href = '/';
                },
                function(error) {
                    console.error('Sign Out Error', error);
                },
            );
    }

    return (
        <div>
            <Typography variant="body1" gutterBottom>
                {currentUser.displayName || 'logged out'}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {currentUser.email}
            </Typography>

            <Typography variant="body1" gutterBottom>
                {currentUser.providerId}
            </Typography>

            <img
                src={currentUser.photoURL}
                alt="user"
                width="100"
                height="100"
            />
            <Paper>
                <Button
                    variant="contained"
                    color="primary"
                    data-url="/git-gist-you-rang"
                    onClick={signOut}
                >
                    Sign Out
                </Button>
            </Paper>
        </div>
    );
};
