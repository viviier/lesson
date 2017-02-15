import React from 'react'
import { render } from 'react-dom'
import CommentBox from './CommentBox/CommentBox'
import data from './CommentBox/JSON/data'

const App = () => (
	<div>
		<CommentBox data={data}/>
		</div>
	)

render(
	<App />,
	document.getElementById('root')
)