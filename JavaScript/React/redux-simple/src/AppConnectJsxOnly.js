import React from 'react';
import './App.css';

let AppConnect = ({statement, deny, verify, noComment}) => {

    return (
        <div className="App">
            <p className="App-intro">
                This AppConnect component uses Redux and connect.
                The connect bits are in a separate file called <strong>AppConnectMaps</strong>.
            </p>
            <h1>App Connect JSX Only</h1>
            {statement}
            <hr />
            <button onClick={verify}>Verify</button>
            <button onClick={deny}>Deny</button>
            <button onClick={noComment}>No Comment</button>
        </div>
    );
};

export default AppConnect;

