import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {blueGrey, green, red} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            backgroundColor: red.A700,

        },
        [theme.breakpoints.up('sm')]: {
            backgroundColor: theme.palette.secondary.main,

        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,

        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: green[500],

        },
    },
    "@global": {
        html: {
            fontSize: 8,
            [theme.breakpoints.up('xs')]: {
                fontSize: 10
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: 14
            },
            [theme.breakpoints.up('md')]: {
                fontSize: 18
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 24
            },
        },
    },
    // Displays the global font-size
    message: {
        "&::before": {
            content: "'Global font size: 16px'",
            [theme.breakpoints.up("xs")]: {
                content: "'Global font size: 10px'"
            },
            [theme.breakpoints.up("sm")]: {
                content: "'Global font size: 14px'"
            },
            [theme.breakpoints.up("md")]: {
                content: "'Global font size: 18px'"
            },
            [theme.breakpoints.up("lg")]: {
                content: "'Global font size: 24px'"
            }
        }
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(1, 1),
        backgroundColor: blueGrey
    },
}));

function App() {

    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid container spacing={1} justify={"center"}>

                <Grid item xs={9}>

                    <Paper className={classes.paper}>

                        <Typography variant="h1" gutterBottom>Welcome to React</Typography>
                        <Typography color="secondary" className={classes.message} gutterBottom />
                        <Typography variant="body1" gutterBottom>Red: xs.</Typography>
                        <Typography variant="body1" gutterBottom>Purple: sm.</Typography>
                        <Typography variant="body1" gutterBottom>Blue: md.</Typography>
                        <Typography variant="body1" gutterBottom>Green: lg.</Typography>
                    </Paper>

                </Grid>


            </Grid>

            <Grid container spacing={1} justify={"space-evenly"} direction="row">

                {[0, 1, 2, 3, 4].map(value => (
                    <Grid key={value} item xs={2}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1" gutterBottom>v={value}</Typography>
                        </Paper>
                    </Grid>
                ))}


            </Grid>

            <Grid container spacing={1} justify={"center"}>
                <Grid item xs={12} md={12}>

                    <Paper className={classes.paper}>
                        <Typography variant="h2" gutterBottom>Third Container</Typography>

                        <Button variant="contained" className={classes.button}>
                            Default
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Primary
                        </Button>
                    </Paper>

                </Grid>
            </Grid>
            <Grid container spacing={3} justify={"center"}>
                <Grid item xs={12} md={12}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography variant="h2" gutterBottom>Fourth Container</Typography>
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
                                <ButtonGroup
                                    variant="contained"
                                    size="small"
                                    aria-label="Small contained button group"
                                >
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
