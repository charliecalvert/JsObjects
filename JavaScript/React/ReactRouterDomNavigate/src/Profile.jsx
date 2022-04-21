import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OthersProfile from './OthersProfile';
import AnotherProfile from './AnotherProfile';
import MyProfile from './MyProfile';

function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <ul>
                    <li><Link to="me">My Profile</Link></li>
                    <li><Link to="other">Other</Link></li>
                    <li><Link to="another">Another</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="me" element={<MyProfile />} />
                <Route path="other" element={<OthersProfile />} />
                <Route path="another" element={<AnotherProfile />} />
            </Routes>
        </div>
    );
}

export default Profile;
