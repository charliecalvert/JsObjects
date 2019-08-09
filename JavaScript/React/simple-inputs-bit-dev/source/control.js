import ReactDOM from 'react-dom';
import React from 'react';
import ElfApp from "./ElfApp";

window.onload = function() {
    ReactDOM.render(
        <div>
            <ElfApp />
        </div>,
        document.getElementById('root')
    );
};
