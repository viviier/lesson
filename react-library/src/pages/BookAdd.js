import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import BookEditor from '../components/BookEditor'

export default class BookAdd extends React.Component {
	render() {
		return (
				<HomeLayout title='添加图书'>
					<BookEditor />
				</HomeLayout>
			)
	}
}