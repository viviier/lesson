import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import userReducer from './userReducer';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

let reducer = combineReducers({
	todoReducer,
	userReducer,
	router: routerReducer
});

export default reducer;