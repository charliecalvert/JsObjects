import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PartOne from './PartOne';
import PartTwo from './PartTwo';
import Header from './Header';

function App() {
    return (
        <div>
            <Header />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/part-one">Part One</Link></li>
                    <li><Link to="/part-two">Part Two</Link></li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/part-one" element={<PartOne />} />
                <Route path="/part-two" element={<PartTwo />} />
            </Routes>
        </div>
    );
}

export default App;
