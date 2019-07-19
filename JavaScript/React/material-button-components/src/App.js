import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {blueGrey} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(3, 12),
        backgroundColor: blueGrey
    },
}));

function App() {

    const classes = useStyles();
    return (
        <div className="App">
            <Grid container spacing={3}>
                
                    <Grid item xs={12} md={12}>


                        <Grid container spacing={1} direction="column" alignItems="center">
                                <Paper className={classes.paper}>
                                <Typography variant="h1" gutterBottom>Welcome to React</Typography>
                                <Typography variant="body1" gutterBottom>With Material UI buttons and grids.</Typography>
                                </Paper>
                        </Grid>

                    </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={1} direction="column" alignItems="center">
                        <Paper className={classes.paper}>
                            <Button variant="contained" className={classes.button}>
                                Default
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                Primary
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>


                    <Grid item>
                        <Paper className={classes.paper}>
                            <ButtonGroup size="small" aria-label="Small outlined button group">
                                <Button>One Elf</Button>
                                <Button>Two Elves</Button>
                                <Button>Three Elves</Button>
                            </ButtonGroup>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={1} direction="column" alignItems="center">
                            <Grid item>
                                <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
                                    <Button>Elf One</Button>
                                    <Button>Elf Two</Button>
                                    <Button>Elf Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    variant="contained"
                                    color="primary"
                                    aria-label="Full-width contained primary button group"
                                >
                                    <Button>Elven One</Button>
                                    <Button>Elven Two</Button>
                                    <Button>Elven Three</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    aria-label="Large contained secondary button group"
                                >
                                    <Button>Alpha</Button>
                                    <Button>Beta</Button>
                                    <Button>Echo</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );

}

export default App;
