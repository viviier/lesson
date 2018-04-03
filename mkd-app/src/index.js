/**
 * @file index.js
 * @date 2018/4/4
 */

import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components';

const store = createStore(reducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);