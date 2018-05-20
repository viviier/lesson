import React from 'react';
import {
  Redirect,
  Switch
} from "react-router-dom";
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Login, Register, Home } from 'component';
import AuthComponent from 'common/component/AuthComponent';
import store from '../store';

const history = createHistory();
const historyWhithStore = syncHistoryWithStore(history, store)

const RouterComponent = () => (
	<Router history={historyWhithStore}>
		<div style={{ height: '100%' }}>
		<Switch>
			<AuthComponent exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Redirect to="/"/>
		</Switch>
		</div>
	</Router>
);

export default RouterComponent;