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
    const {value, options} = this.props

    return(
      <input value={value} />
      {options.length > 0 && (
        <ul>
          {
            options.maps((item, index) => {
              return (
                <li key={index}>
                  {item.text || item}
                </li>
              )
            })
          }
        </ul>
      )}
    )
  }
}
