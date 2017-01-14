import React from 'react'
import { Link } from 'react-router'


const Home = ({ children }) => (
		<div>
			<nav>
				<Link to='/locations'>locations</Link> | 
				<Link to='/about'> about</Link>
			</nav>
			{children}
	</div>
)

export default Home