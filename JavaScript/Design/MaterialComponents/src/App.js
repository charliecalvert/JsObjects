import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './elf-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import classNames from 'classnames';

class App extends Component {
    render() {
        const { classes } = this.props;

        /*
         * We want to be dry, so we create this function to avoid
         * repeating the same code over and over in JSX.
         */
        const getListItem = (text, id) => {
            return (
                <ListItem id={id}>
                    <ListItemIcon>
                        <StarIcon/>
                    </ListItemIcon>
                    <ListItemText>{text}</ListItemText>
                </ListItem>
            );
        };

        /*
         * We want to combine elfTypography with elfParagraph. React
         * doesn't support this out of the box, so we use the very
         * popular classNames library. We use it below in Section Two.
         */
        const elfParagraph = classNames(classes.elfTypography, classes.elfParagraph);

        return (
            <React.Fragment>

                <div className={classes.backDiv3}>
                    <div className={classes.layout}>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                {/*This empty Grid puts space before the first section*/}
                            </Grid>
                            <Grid item xs={12}>

                                <Paper className={classes.paperLion}>
                                    <Typography variant="h4">
                                        Section One
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper className={classes.paperLion}>
                                    <Typography variant="h6">
                                        Section Two
                                    </Typography>
                                    <Typography
                                        className={elfParagraph}
                                        align="left"
                                        variant="body1"
                                    >
                                        In <b>src/index.js</b> we create a theme and wrap the entire app in
                                        the theme. We also use <b>CssBaseline</b>.
                                    </Typography>

                                    <Typography
                                        className={classes.elfTypography}
                                        align="left"
                                        variant="body1"
                                    >
                                        View the source of this component to see how we wrap our content
                                        in the following elements:
                                    </Typography>
                                    <List>
                                        {getListItem('backDiv3', 'bd3')}
                                        {getListItem('layout', 'lo')}
                                        {getListItem(
                                            'A Grid with container and spacing of 24',
                                            'gridContainerSpace24'
                                        )}
                                    </List>
                                    <Typography
                                        className={classes.elfTypography}
                                        align="left"
                                        variant="body1"
                                    >
                                        Inside the four items we create
                                        one or more sections for our
                                        document. Each section has this
                                        structure:
                                    </Typography>
                                    <List>
                                        {getListItem(
                                            'A Grid item with xs = 12',
                                            'gridItem12'
                                        )}
                                        {getListItem(
                                            'Paper with a className of paperLion',
                                            'paperLion'
                                        )}
                                        {getListItem(
                                            'And then some content',
                                            'content'
                                        )}
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
