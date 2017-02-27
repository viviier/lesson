import React, {Component} from 'react'
import Container from './container/Contianer'

const data = {
    container: {
        title: 'EDU | 网易教育产品部',
        copyright: ['©2014 icourse163.org 浙ICP备08114786号-1', 'course.cn 京ICP备12020869号-2 京公网安备110102000459-2'],
        list: [
            {
                title: '友情链接',
                data: ['网易公开课', '网易云课堂', '中国大学MOOC']
            },
            {
                title: '我们',
                data: ['关于', '联系', '关注']
            },
            {
                title: '更多',
                data: ['常见问题', '意见反馈']
            }
        ]
    }
}

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Container {...data.container}/>
        )
    }
}