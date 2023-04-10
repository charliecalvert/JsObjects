/**
 * Created by charlie on 3/26/17.
 */
import React from 'react';
import ElfComponent from './ElfComponent';
import './styles.css';

function App() {
    return (
        <>
            <div className="elf-show">
                <h1>Elvenware, South America!</h1>
                <p>This is JSX in the main element.</p>
            </div>
            <ElfComponent />
        </>
    );
}

export default App;
