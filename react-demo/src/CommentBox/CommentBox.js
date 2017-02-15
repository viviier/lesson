import React, { Component } from 'react'
import CommentList from './CommentList/CommentList'
import CommentForm from './CommentForm/CommentForm'
import data from './JSON/data'

export default class CommentBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	handleComponentSubmit = (comment) => {
		this.setState({
			data: data
		})
	}
	render(){
		return(
				<div className='commentBox'>
					<h1>Comments</h1>
					<CommentList data={this.state.data} />
					<CommentForm onCommentSubmit={this.handleComponentSubmit} />
				</div>
			)
	}
}
