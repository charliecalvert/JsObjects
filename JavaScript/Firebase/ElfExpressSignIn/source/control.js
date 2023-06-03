// import { renderAppTool } from './TheTheme';

import loadAddress from './load-address.js';
import ElfApp from './ElfApp.js';
import { FirebaseLogout } from './FirebaseLogout.js';
import { initApp, auth } from './elf-firebase.cjs';
import React from 'react';
// import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom/client';

const APPS = {
    ElfApp,
    FirebaseLogout,
};

/**
 * Render object in the root element of the DOM
 * @param {*} choice
 */
function renderAppInElement(choice) {
    const AppTool = APPS[choice.dataset.app];
    if (!AppTool) return;
    const props = Object.assign({}, choice.dataset);
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<AppTool {...props} />, choice);
    // ReactDOM.render(<AppTool {...props} />, choice);
}

const doRender = () => {
    const selectors = document.querySelectorAll('.__react-root');
    selectors.forEach(renderAppInElement);
};

window.onload = function() {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<ElfApp />);
    // ReactDOM.render(<ElfApp />, );
    initApp(() => {
        if (auth.currentUser) {
            loadAddress()
                .then((result) => {
                    console.log('LOAD STATUS', result.status);
                    doRender();
                })
                .catch((err) => {
                    alert(err);
                    doRender();
                });
        } else {
            doRender();
        }
    });
};
