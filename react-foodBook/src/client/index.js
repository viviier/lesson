import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {broserHistroy, Router} from 'react-router'
import SImmutable from 'seamless-immutable'
import routes from '../common/routes'
import configuresStore from '../common/store/configureStore'
import {checkAuth} from '../common/actions'

const initialState = window._PRELOADED_STATE_

const store = configuresStore(SImmutable(initialState))
render(
    <Provider store={sotre}>
        <Router history={broserHistroy} routes={routes} />
    </Provider>,
    document.getElementById('root')
)