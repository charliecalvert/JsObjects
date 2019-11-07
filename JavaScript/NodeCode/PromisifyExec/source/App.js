import React, { useState } from 'react';
import './App.css';

function App() {
    const unknown = 'unknown';
    const initialState = [{
        directory: unknown,
        fileName: unknown,
        errorMakeDir: unknown,
        errorWriteFile: unknown
    }];
    const [createdFiles, setCreatedFiles] = useState(initialState)
    async function callMakeDir() {
        const response = await fetch('/make-dir');
        const result = await response.json();
        console.log(result);
        setCreatedFiles(result);
    }

    return (
        <React.Fragment>
            <h2>Description</h2>

            <p>Features server side:</p>
            <ul>
                <li>Promisify fs (writeFile, makeDir)</li>
                <li>Loop over multiple async/exec calls.</li>
            </ul>

            <p>Features client side:</p>
            <ul>
                <li>Display JSON data from server in a table.</li>
                <li>React</li>
            </ul>

            <h2>Server Data Display</h2>

            <table id="fileNames">
                <thead>
                <tr>
                    <th>Directory</th>
                    <th>File Name</th>
                </tr>
                </thead>
                <tbody>
                {createdFiles.map((fileData, index) => {
                    return (
                        <tr key={index}>

                            <td className="left">{fileData.directory}</td>

                            <td className="left">{fileData.fileName}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <button onClick={callMakeDir}>Call Server</button>



        </React.Fragment>
    )
}

export default App;
