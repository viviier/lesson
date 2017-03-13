import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable'
import rootReducer from '../reducers/index'

const initialState = Immutable.Map()

function configureStore(initialState) {
    return createStore(
         rootReducer,
    initialState,
   compose(
        applyMiddleware(reduxThunk, createLogger({stateTransformer: state => state.toJS()}))
     )
    )
}

const store = configureStore()
export default store