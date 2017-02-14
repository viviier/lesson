import React, { Component } from 'react'

/*
 * @对于SliderDots，我们需要一个count来决定显示几个dot，还需要一个noLocal来判断哪个dot对应当前轮播项，点击dot是否需要一个回调函数turn响应
 * @因此它需要的属性：
 * count(轮播项总数)
 * nowLocal(当前轮播项)
 * turn(点击后回调函数)
 */


 export default class SliderDots extends Component {
 	constructor(props) {
 		super(props)
 	}

 	handleDotClick(i) {
 		let option = i - this.props.nowLocal
 		this.props.turn(option)
 	}

 	render(){
 		let dotNodes = []
 		let { count, nowLocal } = this.props
 		for(let i = 0; i < count; i++) {
 			dotNodes[i] = (
 			  <span
 				key={'dot' + i}
 				className={'slider-dot' + (i === this.props.nowLocal ? ' slider-dot-selected' : '' )}
 				onClick={this.handleDotClick.bind(this, i)}
 			  ></span>
 				)
 		}
 		return (
			<div className='slider-dots-wrap'>
				{dotNodes}
			</div>
 		)
 	}
 }