import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd'
import UserListPage from './pages/UserList'
import HomeLayout from './layouts/HomeLayout'

render(
  <Router history={hashHistory}>
  <Route component={HomeLayout} >
    <Route path='/' component={HomePage} />
    <Route path='/user/add' component={UserAddPage} />
    <Route path='/user/list' component={UserListPage} />
    </Route>
  </Router>,
  document.getElementById('app')
)
