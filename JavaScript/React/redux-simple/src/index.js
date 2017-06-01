import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SimpleRedux from './SimpleRedux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
let store = createStore(spokesman);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App/>
            <SimpleRedux />
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
