import React from 'react';

function Header() {
    return (
        <header className="black">
            <h2>Learn React Router DOM</h2>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </header>
    )
}

export default Header;