import React, { useState } from 'react';

function PartOne() {

    const [fetchedJson, setFetchedJson] = useState('unknown');

    async function getJson() {
        const response = await fetch('/get-json');
        const result = await response.json();

        console.log(result);
        setFetchedJson(result.result);
    }

    return (
        <React.Fragment>
            <h1>Part One</h1>
            <p>A simple react functional component. See console output after pushing button.</p>

            <button onClick={getJson}>Get JSON</button>

            <p>Output: {fetchedJson}</p>
        </React.Fragment>
    );
}

export default PartOne;