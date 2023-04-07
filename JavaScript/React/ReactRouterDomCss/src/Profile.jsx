import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OthersProfile from './OthersProfile';
import AnotherProfile from './AnotherProfile';
import MyProfile from './MyProfile';

function Profile() {
    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    return (
        <div>
            <h1>Profile</h1>
            <div id="mySidenav" className="sidenav">
                <button className="closebtn" type="button" onClick={closeNav}>cancel</button>
                <nav>
                    <ul>
                        <div tabIndex="0" role="button" onKeyPress={closeNav} onClick={closeNav}>
                            <li><Link to="me">My Profile</Link></li>
                            <li><Link to="other">Other</Link></li>
                            <li><Link to="another">Another</Link></li>
                            <li><Link to="/">Home</Link></li>
                        </div>
                    </ul>
                </nav>
            </div>
            <button type="button" className="basic-button" onClick={openNav}>menu</button>
            <Routes>
                <Route path="me" element={<MyProfile />} />
                <Route path="other" element={<OthersProfile />} />
                <Route path="another" element={<AnotherProfile />} />
            </Routes>
        </div>
    );
}

export default Profile;
