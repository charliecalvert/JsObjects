import React from 'react';
import countries from './countries';
import './styles.css';

function ElfComponent() {
    // eslint-disable-next-line react/no-array-index-key
    const listItems = countries.map((country) => (<li key={country.id}>{country.name}</li>));

    return (
        <div className="elf-show">
            <h1>Countries</h1>
            <p>
                This React Component is a child of the App component.
                It has an array with a map method that uses a callback
                function to help it iterate a list of countries:
            </p>
            <ul>{listItems}</ul>
        </div>
    );
}

export default ElfComponent;
