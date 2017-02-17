import React, { Component } from 'react'

export default class HomeLayout extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render(){
    const {children} = this.props

    return (
      <div>
        <header>
          <h1>{this.context.title}</h1>
        </header>

        <main>
          {children}
        </main>
      </div>
    )
  }
}

HomeLayout.contextTypes = {
  title: React.PropTypes.string.isRequired
}
