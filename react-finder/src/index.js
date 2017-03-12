import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import inijectTapEventPlugin from 'react-tab-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from './components/Main'
import HomePageContainer from './containers/HomePageContainer'
import ResultPageContainer from './containers/ResultPageContainer'
import store from './store'

// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 会遇到的问题
inijectTapEventPlugin()

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