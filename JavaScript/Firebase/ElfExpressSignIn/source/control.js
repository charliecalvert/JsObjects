//import { renderAppTool } from './TheTheme';
import loadAddress from './load-address';
import ElfApp from './ElfApp';
import { FirebaseLogout } from './FirebaseLogout';
import { initApp } from './elf-firebase';
import React from 'react';
import ReactDOM from 'react-dom';

const APPS = {
    ElfApp,
    FirebaseLogout
};

function renderAppInElement(choice) {
    const AppTool = APPS[choice.dataset.app];
    if (!AppTool) return;
    const props = Object.assign({}, choice.dataset);
    ReactDOM.render(<AppTool {...props} />, choice);
}

const doRender = () => {
    const selectors = document.querySelectorAll('.__react-root');
    selectors.forEach(renderAppInElement);
};

window.onload = function() {
    ReactDOM.render(<ElfApp />, document.getElementById('root'));
    initApp(() => {
        if (window.firebase.auth().currentUser) {
            loadAddress()
                .then(result => {
                    console.log('LOAD STATUS', result.status);
                    doRender();
                })
                .catch(err => {
                    alert(err);
                    doRender();
                });
        } else {
            doRender();
        }
    });
};
