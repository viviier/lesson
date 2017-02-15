import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd'

render(
  <Router history={hashHistory}>
    <Route path='/' component={HomePage} />
    <Route path='/user/add' component={UserAddPage} />
  </Router>,
  document.getElementById('app')
)
