import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import App from './App';
import PartOne from './routes/PartOne';
import PartTwo from './routes/PartTwo';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/part-one" element={<PartOne />} />
                <Route path="/part-two" element={<PartTwo />} />
            </Route>
        </Routes>
    );
}

export default Routing;