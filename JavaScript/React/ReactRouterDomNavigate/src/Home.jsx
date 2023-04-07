import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                    <ul>
                        <li><Link to="/profile">Profiles</Link></li>
                        <li><Link to="/profile/other">Other Profile</Link></li>
                        <li><Link to="/profile/another">Another Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Home;
