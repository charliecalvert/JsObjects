/**
 * Created by charlie on 11/5/16.
 */

import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

window.onload = function() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <div>
            <App />
        </div>
    );
};
