import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from '../components/Main/Main'
import HomePageContainer from '../containers/HomePage/HomePage'
import ResultPageContainer from '../containers/ResultPage/ResultPage'
import store from '../store/configuerStore'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path='/' conponent={Main}>
                    <IndexRoute component={HomePageContainer} />
                    <Route path='/result' component={ResultPageContainer} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
)