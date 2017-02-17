import React, { Component } from 'react'


export default class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state ={
      displayValue: '',
      activeItemIndex: -1
    }
  }

  rendr() {
    const {displayValue, activeItemIndex} = this.state
  }
}
