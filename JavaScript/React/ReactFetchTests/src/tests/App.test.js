import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import elfLogger from '../elf-logger';

describe('App Tests', function() {


    elfLogger.off();

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});