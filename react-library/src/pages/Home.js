import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render(){
    return(
      <div>
        <header>
          <h1>Welcome</h1>
        </header>

        <main>
          <Link to='/user/add'>添加用户</Link>
        </main>
      </div>
    )
  }
}
