import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartOne from './PartOne';
import PartTwo from './PartTwo';

function App() {

    return (
        <Router>
            <div>
                <header className="black">
                    <h2>Learn React Roujter DOM</h2>
                </header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/part-one">Part One</Link></li>
                        <li><Link to="/part-two">Part Two</Link></li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/part-one">
                        <PartOne />
                    </Route>

                    <Route path="/part-two">
                        <PartTwo />
                    </Route>

                </Switch>
            </div>
        </Router>
    )

}

export default App;
