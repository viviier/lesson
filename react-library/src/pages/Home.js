import React, { Component } from 'react'
import style from '../styles/home-page.less'

export default class Home extends Component {
    render() {
        return (
           <div className={style.welcome}>
           Welcome
           </div>
        )
    }
}
