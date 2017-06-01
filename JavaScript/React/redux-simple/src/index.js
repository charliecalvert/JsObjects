import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SimpleRedux from './SimpleRedux';
import AppConnect from './AppConnect';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import spokesman from './spokesman';
let store = createStore(spokesman);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <AppConnect/>
                <App store={store}/>
                <SimpleRedux />
            </div>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
