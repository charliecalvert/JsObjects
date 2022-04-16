import React from 'react';
import countries from './countries';
import './styles.css';

function ElfComponent() {
    // eslint-disable-next-line react/no-array-index-key
    const listItems = countries.map((country) => (<li key={country.id}>{country.name}</li>));

    return (
        <div className="elf-show">
            <h1>Countries</h1>
            <p>This is a React Component with a map from a list of countries:</p>
            <ul>{listItems}</ul>
        </div>
    );
}

export default ElfComponent;
