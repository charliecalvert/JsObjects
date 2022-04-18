import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/*" element={<Profile />} />
        </Routes>
    );
}

export default Routing;
