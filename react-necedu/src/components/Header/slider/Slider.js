import React, {Component} from 'react'
import {Carousel} from 'antd'

export default class Slider extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        let {data: {list}} = this.props 
        let config = {
            autoplaySpeed: 5000,
            autoplay: true,
            pauseOnHover: true,
        }
        return(
            <Carousel {...config}>
                {list.map((item, index) => <img src={item} key={index} />)}
            </Carousel>
        )
    }
}