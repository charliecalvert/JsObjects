import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import tempAddressList from '../address-list';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {

        textAlign: 'center',
        addingTop: theme.spacing.unit * 500,
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    }),
});

class InitializeDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressIndex: 0,
            addressList: tempAddressList
        };
    }

    sync = () => {
        this.props.dataManager.sync();
    };

    convertAddress = () => {
        this.props.dataManager.convertAddress(this.state.addressList);
    };

    deleteDatabase = () => {
        this.props.dataManager.deleteDatabase();
    };

    getAddressList = () => {
        console.log('getAddressList called.');
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer => {
                if (!this.canceled) {
                    this.setState({addressList: addressListFromServer});
                    this.setState({addressIndex: 0});
                    console.log(addressListFromServer.length);
                    //this.setAddress(0);
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };

    getDbInfo = () => {
        this.props.dataManager.db.info().then(function(info) {
            console.log(info);
        });
    };

    getFive = () => {
        this.props.dataManager.db
            .find({
                selector: {
                    _id: {$gte: null}
                },
                limit: 5
            })
            .then(docs => {
                console.log(docs);
            });

    };

    showIndex = () => {

        this.props.dataManager.db
            .getIndexes()
            .then(function(result) {
                console.log(result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.rootBar} elevation={4}>
                    <Typography variant="headline" gutterBottom>
                        Database Tools
                    </Typography>

                    <Typography variant="body1" gutterBottom align="left">
                        The tools found here would probably not be part of a
                        production system. They are designed to help us understand
                        how our database works.
                    </Typography>
                    <Typography variant="body1" gutterBottom align="left">If you clear the data in storage then refresh
                        the app before
                        trying to do anything else.</Typography>
                    <Typography variant="headline">Enter Sync Mode</Typography>
                    <Typography variant="body1" gutterBottom align="left">Use the sync button when you are connected to
                        the Internet.
                        By default, you are not in sync mode. Don't press this
                        button if you are offline.</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.sync}
                    >
                        Sync
                    </Button>

                    <Typography variant="headline">Load Data</Typography>
                    <Typography variant="body1" gutterBottom align="left">Use these buttons, pressing them in the order
                        shown, to load our
                        address-list and convert it to PouchDb Format. You should need
                        to do this only once, or only after you clear Storage using the
                        Developer Tools.</Typography>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.getAddressList}
                        >
                            Get Address List
                        </Button>

                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.convertAddress}
                        >
                            Convert Address
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.props.dataManager.createIndex}
                        >
                            Create Index on Last Name
                        </Button>
                    </div>

                    <Typography variant="headline">Get Information</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.getDbInfo}
                    >
                        Get Database Information
                    </Button>

                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.showIndex}
                    >
                        Show Index
                    </Button>

                    <Typography variant="headline">Coming Soon</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.deleteDatabase}
                    >
                        Delete Database
                    </Button>
                </Paper>
            </div>
        );
    }
}

InitializeDatabase.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InitializeDatabase);