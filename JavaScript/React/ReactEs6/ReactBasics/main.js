import React from 'react';
import ReactDOM from 'react-dom';
import { ReactBasics } from './ReactBasics.js';
import { ReactBasicsStatelessFunction } from './ReactBasicsStatelessFunctional';

ReactDOM.render(
    <div>
        <ReactBasics />

        <ReactBasicsStatelessFunction />
    </div>,
    document.getElementById('root')
);
