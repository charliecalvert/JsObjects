import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBtn from './AppBtn.js';
import * as serviceWorker from './serviceWorker';
import { log } from './logger.js';

log('index.js loaded');

window.onload = function () {
    log('window.onload called');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    log('ReactDOM.createRoot called', root);
    root.render(
        <div>
            <AppBtn checkedRadioButton='RadioOne' />
        </div>
    );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
