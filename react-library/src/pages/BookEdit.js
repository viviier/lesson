import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import BookEditor from '../components/BookEditor'
import fetch from 'isomorphic-fetch'

export default class BookEdit extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			book: null
		}
	}

	componentWillMount(){
		const bookId = this.context.router.params.id
		fetch('http://localhost:3000/book/' + bookId)
			.then(res => res.json())
			.then(res => {
				this.setState({
					book: res
				})
			})
	}

	render() {
		const {book} = this.state
		return(
				<HomeLayout title='编辑图书'>
					{
						book ? <BookEdit editTarget={book} /> : '加载中...'
					}
				</HomeLayout>
			)
	}
}

BookEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
};