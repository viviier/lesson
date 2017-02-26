import React, {Component} from 'react'
import About from './about/About'
import ViewImg from './viewImg/ViewImg'

// about
import openclass from '../../assets/images/open-class.png'
import classroom from '../../assets/images/cloud-classroom.png'
import mooc from '../../assets/images/university-mooc.png'

// viewimg
import viewimg from '../../assets/images/aboutImg.jpg'

let data = {
    about: {
        list: [
            {
                logo: openclass,
                title: '网易公开课',
                text: '推出国内外名校公开课，涉及广泛的学科，名校老师认真讲解深度剖析，网易视频公开课频道搭建起强有力的网络视频教学平台。'
            },
            {
                logo: classroom,
                title: '云课堂',
                text: '网易旗下大型在线学习平台，该平台面向学习者提供海量免费、优质课程,创新的个性化学习体验，自由开放的交流互动环境。'
            },
            {
                logo: mooc,
                title: '中国大学MOOC',
                text: '是爱课程网携手云课堂打造的在线学习平台，每一个有提升愿望的人,都可以在这里学习中国最好的大学课程，学完还能获得认证证书。'
            }
        ]
    },
    view: {
        img: viewimg
    }
}

export default class Content extends Component {
    render(){
        return(
            <div>
                <About data={data.about} />
                <ViewImg data={data.view} />
            </div>
        )
    }
}