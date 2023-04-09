import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import SimpleRedux from './SimpleRedux';
import AppConnect from './AppConnect';
import AppConnectMaps from './AppConnectMaps';
import DispatchConnect from './DispatchConnect';
import DispactchComponentConnect from './DispatchComponentConnect';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import spokesman from './spokesman';

const store = createStore(spokesman);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <AppConnect />
                <hr />
                {' '}
                <hr />
                <AppConnectMaps />
                <hr />
                {' '}
                <hr />
                <DispactchComponentConnect />
                <hr />
                {' '}
                <hr />
                <DispatchConnect />
                <hr />
                {' '}
                <hr />
                <App store={store} />
                <hr />
                {' '}
                <hr />
                <SimpleRedux />
            </div>
        </Provider>
    </div>,
    document.getElementById('root'),
);
registerServiceWorker();
