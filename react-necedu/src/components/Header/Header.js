import React, {Component} from 'react'
import Tips from './tips/Tips'
import Nav from './nav/Nav'

import logo from '../../assets/images/logo.png'



const data = {
    tips: {
        msg: '网易云课堂微专业，帮助你掌握专业技能，令你求职或加薪多一份独特优势！',
    },
    nav: {
        logo,
        list: ['网易云课堂', '云课堂', '中国大学MOOC']
    }
}

export default class Header extends Component {
    render(){
        return (
            <div>
                <Tips data={data.tips}/>
                <Nav data={data.nav}/>
            </div>
        )
    }
}