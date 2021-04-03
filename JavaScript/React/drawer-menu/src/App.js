import React, { Component } from 'react';
import Foo from './Foo';
import Bar from './Bar';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { Toolbar, ToolbarTitle } from '@material-ui/core/Toolbar';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const paperStyle = {
    height: '85%',
    width: '85%',
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};

class App extends Component {
    classes = useStyles();
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: null,
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    showBar = () => {
        this.setState({ show: 'bar', open: false });
    };

    showFoo = () => {
        this.setState({ show: 'foo', open: false });
    };

    render() {
        let content = null;

        switch (this.state.show) {
            case 'foo':
                content = <Foo />;
                break;

            case 'bar':
                content = <Bar />;
                break;

            default:
                content = <h1>Waiting</h1>;
        }

        return (
            <div className="App">
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Learn about Drawer, MenuItem and Paper"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <AppBar title="AppBar" />
                    <MenuItem id="showFooId" onClick={this.showFoo}>
                        Show Foo
                    </MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>
                        Show Bar
                    </MenuItem>
                </Drawer>
                <Paper style={paperStyle} zDepth={5}>
                    <Toolbar style={{ justifyContent: 'center' }}>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            Material UI
                        </Typography>
                    </Toolbar>
                    {content}
                    <p>
                        Click the icon on the AppBar to open the Drawer and then
                        pick a menu item. The text above should change.
                    </p>
                </Paper>
            </div>
        );
    }
}

export default App;
