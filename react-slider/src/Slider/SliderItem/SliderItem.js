import React, { Component } from 'react'

/*
 * @SliderItem是用来展示轮播图片的每个内容，它需要src和alt属性
 * @而我们之前已经把轮播项写成了一个对象，所以可以把src和alt作为属性放在item
 * @而且在未使用组件的时候我们是不知道轮播项目的数量的，所以宽度还需要count（图片数目来计算）
 * 因此它需要的属性
 * item(包含src和alt属性)
 * count(轮播项总数目)
 */

 export default class SliderItem extends Component {
 	constructor(props) {
 		super(props)
 	}

 	render() {
 		let { count, item } = this.props
 		let width = 100 / count + '%'

 		return (
 				<li className='slider-item' style={{width: width}}>
 					<img src={item.src} alt={item.alt} />
 				</li>
 			)
 	}
 }