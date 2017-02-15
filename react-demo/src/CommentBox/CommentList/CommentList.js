import React from 'react'
import Comment from './Comment/Comment'


const CommentList = ({data}) => {
	return (
		<div className='commentList'>
			{
				data.map( item => 
					<Comment
						key={item.id}
						author={item.author}
						>
						{item.text}
						</Comment>
				)
			}
		</div>
	)
}

export default CommentList