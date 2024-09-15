import React, { useState, useEffect } from 'react';
import './App.css';

const AppCopy = () => {
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
}; // AppCopy

export default AppCopy;
