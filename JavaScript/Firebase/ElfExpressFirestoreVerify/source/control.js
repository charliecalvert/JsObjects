import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {FirebaseLogout} from "./FirebaseLogout";
import {initApp} from './elf-firebase';

const APPS = {
    App,
    FirebaseLogout
};

function renderAppInElement(choice) {
    const AppTool = APPS[choice.dataset.app];
    if (!AppTool) return;
    const props = Object.assign({}, choice.dataset);
    //renderAppTool(AppTool, props, choice);
    ReactDOM.render(
        <AppTool {...props} />, choice
    )
}

const doRender = () => {
    const selectors = document.querySelectorAll('.__react-root');
    selectors.forEach(renderAppInElement);
};

window.onload = function () {
    initApp(() => {
        if (window.firebase.auth().currentUser) {
            document.getElementById('root').innerHTML = "";
            doRender();
        } else {
            ReactDOM.render(<App/>, document.getElementById('root'));
        }
    })

};

/*
window.onload = function() {
    ReactDOM.render(<ElfApp/>, document.getElementById('root'));
};
*/

