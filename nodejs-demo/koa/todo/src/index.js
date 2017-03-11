import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './component/Login'
import TodoList from './component/TodoList'

const App = () => (
    <Router>
        <div>
        <Route path='/' component={Login} />
        <Route path='/list' component={TodoList} />
        </div>
    </Router>
)

render(
       <App />,
    document.getElementById('root')
)