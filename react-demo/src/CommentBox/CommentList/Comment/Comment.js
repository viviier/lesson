import React from 'react'
import  Remarkable  from 'remarkable'


const Comment = ({author, children}) => {
	 let rawMarkup = () => {
		let md = new Remarkable()
		let rawMarkup = md.render(children.toString())
		return {__html: rawMarkup}
	}

	return (
			<div className='comment'>
				<h2 className='CommentAuthor'>
					{author}
				</h2>
				<span dangerouslySetInnerHTML={rawMarkup()} />
			</div>
		)
}
export default Comment