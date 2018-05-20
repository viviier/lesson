import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'normalize.css';
import './index.less';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import Test from './routers';

// axios global header
axios.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = `Tk ${localStorage.getItem('token')}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});

ReactDOM.render(
	<Provider store={store}>
		<Test />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
