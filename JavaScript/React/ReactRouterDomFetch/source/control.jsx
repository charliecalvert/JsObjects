import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

function gorp() {
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    );
}
setInterval(gorp, 1000); 
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
