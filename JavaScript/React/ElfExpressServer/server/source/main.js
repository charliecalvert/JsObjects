/**
 * Created by charlie on 3/31/17.
 */

import React from 'react';
import ReactDom from 'react-dom';
import App from './AppWithEmbeddedJsx';

ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
