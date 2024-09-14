import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [title, setTitle] = useState('');

    const callFoo = () => {
        fetch('/foo')
            .then(response => response.json())
            .then(json => {
                console.log('parsed json', json);
                setTitle(json.title);
            })
            .catch(ex => {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    useEffect(() => {
        // Any side effects or initial data fetching can be done here
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={callFoo}>Call Foo</button>
        </div>
    );
};

export default App;
