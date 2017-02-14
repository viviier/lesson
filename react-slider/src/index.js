import React from 'react'
import { render } from 'react-dom'
import Slider from './Slider/Slider'

/*
 * @创建一个组件之前，我们需要先想怎么配置使用组件
 * @他有哪些属性需要我们传入
 * @items 图片列表 speed 轮播速度 delay 延时 pause 鼠标滑过暂停 autoplay 自动播放 dots 小圆点 arrows 箭头
 */
const IMAGE_DATA = [
	{
		src: require('./images/08a8f9111655a8a0c2f1dd05ea4f5291692fb08c.jpg'),
		alt: 'image-1'
	}, 
	{
		src: require('./images/19d45c8352ebf3271db37efde36049b73fc8a37b.jpg'),
		alt: 'image-2'
	}, 
	{
		src: require('./images/9e9287e1e69f8489cbb9031afb090e1bc893311e.jpg'),
		alt: 'image-3'
	}, 
]

render(
	<Slider 
		items = {IMAGE_DATA}
		speed={1.2}
		delay={2.1}
		pause={true}
		autoplay={true}
		dots={true}
		arrows={true}
	/>,
	document.getElementById('root')
	)