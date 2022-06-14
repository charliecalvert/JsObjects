import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@mui/styles';
// import { styles } from './elf-styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import classNames from 'classnames';

class App extends Component {
    render() {
        // const { classes } = this.props;

        /*
         * We want to be dry, so we create this function to avoid
         * repeating the same code over and over in JSX.
         */
        const getListItem = (text, id) => {
            return (
                <ListItem id={id}>
                    <ListItemIcon>
                        <StarIcon />
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
 /*        const elfParagraph = classNames(
            classes.elfTypography,
            classes.elfParagraph
        ); */

        return (
            <React.Fragment>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            {/*This empty Grid puts space before the first section*/}
                        </Grid>

                        <Grid item xs={12}>
                            <Paper>
                                <Typography variant="h4">
                                    Section One
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper>
                                <Typography variant="h6">
                                    Section Two
                                </Typography>
                                <Typography
                                    // className={elfParagraph}
                                    align="left"
                                    variant="body1"
                                >
                                    In <b>src/index.js</b> we create a theme and
                                    wrap the entire app in the theme. We also
                                    use <b>CssBaseline</b>.
                                </Typography>

                                <Typography
                                    //
                                    align="left"
                                    variant="body1"
                                >
                                    View the source of this component to see how
                                    we wrap our content in the following
                                    elements:
                                </Typography>
                                <List>
                                    {getListItem('layout', 'lo')}
                                    {getListItem(
                                        'A Grid with container and spacing of 24',
                                        'gridContainerSpace24'
                                    )}
                                </List>
                                <Typography
                                    //
                                    align="left"
                                    variant="body1"
                                >
                                    Inside the four items we create one or more
                                    sections for our document. Each section has
                                    this structure:
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
            </React.Fragment>
        );
    }
}

/* App.propTypes = {
    classes: PropTypes.object.isRequired
}; */

export default App;
