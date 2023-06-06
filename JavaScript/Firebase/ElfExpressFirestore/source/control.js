import React from 'react';
// import ReactDOM from 'react-dom';
import ElfApp from './ElfApp';
import { createRoot } from 'react-dom/client';

// createRoot(container!) if you use TypeScript


window.onload = function() {
    // ReactDOM.render(<ElfApp/>, document.getElementById('root'));
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<ElfApp />);
};

