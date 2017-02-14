import React, { Component } from 'react'

export default class SliderArrows extends Component {
	constructor(props) {
		super(props)
	}

	handleArrowClick(option) {
		this.props.turn(option)
	}

	render() {
		return (
				<div className='slider-arrow-wrap'>
					<span
						className='slider-arrow slider-arrow-left'
						onClick={this.handleArrowClick.bind(this, -1)}
						/> 
					<span 
						className='slider-arrow slider-arrow-right'
						onClick={this.handleArrowClick.bind(this, 1)}
						/> 
				</div>
			)
	}
}