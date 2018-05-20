import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({reducer, routing: routerReducer}), composeEnhancers(middleware));

export default store;