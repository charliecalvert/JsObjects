import React from 'react';

function Header() {
    const dateStr = 'It is {new Date().toLocaleTimeString()}.';
    return (
        <header className="black">
            <h2>Learn React Router DOM</h2>
            <h2>{dateStr}</h2>
        </header>
    );
}

export default Header;
