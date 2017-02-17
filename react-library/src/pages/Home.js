import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Link to='/user/list'>用户列表</Link>
        <br />
        <Link to='/user/add/'>添加用户</Link>
      </div>
    )
  }
}
