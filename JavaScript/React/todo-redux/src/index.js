import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import ShowReduxState from './components/ShowReduxState';

const store = createStore(todoApp);

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <ShowReduxState store={store} />
    </div>,

    document.getElementById('root'),
);
