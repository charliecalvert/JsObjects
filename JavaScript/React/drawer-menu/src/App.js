import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bar from './Bar';
import Foo from './Foo';
// import { Toolbar, ToolbarTitle } from '@material-ui/core/Toolbar';
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

function App() {
    const classes = useStyles();

    /* this.state = {
        open: false,
        show: null,
    }; */

    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(null);

    const handleToggle = () => this.setState({ open: !this.state.open });

    const showBar = () => {
        setOpen(false);
        setShow('bar');
        // this.setState({ show: 'bar', open: false });
    };

    const showFoo = () => {
        setOpen(false);
        setShow('foo');
        // this.setState({ show: 'foo', open: false });
    };

    let content = null;

    switch (show) {
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
                onLeftIconButtonClick={handleToggle}
            />
            <Drawer
                docked={false}
                width={200}
                open={open}
                onRequestChange={(open) => this.setState(open)}
            >
                <AppBar title="AppBar" />
                <MenuItem id="showFooId" onClick={showFoo}>
                    Show Foo
                </MenuItem>
                <MenuItem id="showBarId" onClick={showBar}>
                    Show Bar
                </MenuItem>
            </Drawer>
            <Paper style={paperStyle} zDepth={5}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material UI
                    </Typography>
                </Toolbar>
                {content}
                <p>
                    Click the icon on the AppBar to open the Drawer and then
                    pick a menu item. The text above should change. Refresh the
                    screen to start over.
                </p>
            </Paper>
        </div>
    );
}

export default App;
