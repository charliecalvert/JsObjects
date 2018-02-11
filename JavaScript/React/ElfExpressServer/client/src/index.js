/**
 * Created by charlie on 3/31/17.
 */

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import configReducer from './reducers/redux-counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(configReducer);
const root = document.getElementById('root');

ReactDom.render(
    <div>
        <Provider store={store}>
        <App />
        </Provider>
    </div>,
    root
);

registerServiceWorker();
