const React = require('react');
// const { useState, useEffect } = React;
// require('./App.css');


// import { render } from '@testing-library/react';

const title = 'Hello React';

function App() {
  return <div>{title}</div>;
}

/* export default App;

const App = () => {
    const [title, setTitle] = useState('CSC');

    const fetchJsonAndShowTitle = () => {
        fetch('/get-title')
            .then(response => response.json())
            .then(json => {
                console.log('parsed json', json);
                console.log('title:', title);

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

    }, []);

    return (
        <div className="center-container">
            <h1>{title}</h1>
            <button onClick={fetchJsonAndShowTitle}>Call fetchJsonAndShowTitle</button>
        </div>
    );
}; */

export default App;
