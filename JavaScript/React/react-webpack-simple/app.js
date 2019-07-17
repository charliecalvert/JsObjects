/**
 * Created by charlie on 3/26/17.
 */

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {ElfComponent} from './ElfComponent';
import './styles.css';

ReactDOM.render(
    <Fragment>
        <div className="elf-show">
            <h1>Elvenware, South America!</h1>
            <p>This is JSX.</p>
        </div>
        <ElfComponent/>
    </Fragment>,
    document.getElementById('root')
);
