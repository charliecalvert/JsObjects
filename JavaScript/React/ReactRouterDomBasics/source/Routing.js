import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PartOne from './routes/PartOne';
import PartTwo from './routes/PartTwo';
import PartThree from './routes/PartThree';
import PartFour from './routes/PartFour';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/part-one" element={<PartOne />} />
                <Route path="/part-two" element={<PartTwo />} />
                <Route path="/part-three/:id" element={<PartThree />} />
                <Route path="/part-four/*" element={<PartFour />} />
            </Route>
        </Routes>
    );
}

export default Routing;
