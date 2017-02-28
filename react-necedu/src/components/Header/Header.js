import React, {Component} from 'react'
import Tips from './tips/Tips'
import Nav from './nav/Nav'
import Slider from './slider/Slider'

// logo
import logo from '../../assets/images/logo.png'


// slider
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'


const data = {
    tips: {
        msg: '网易云课堂微专业，帮助你掌握专业技能，令你求职或加薪多一份独特优势！',
    },
    nav: {
        logo,
        list: [{
            name: '网易公开课',
            src: 'https://open.163.com/'
        },
         {
            name: '云课堂',
            src: 'http://study.163.com/'
        },
        {
            name: '中国大学MOOC',
            src: 'http://www.icourse163.org/'
        }]
    },
    slider: {
        list: [banner1, banner2, banner3]
    }
}

export default class Header extends Component {
    render(){
        return (
            <div>
                <Tips data={data.tips}/>
                <Nav data={data.nav}/>
                <Slider data={data.slider} />
            </div>
        )
    }
}