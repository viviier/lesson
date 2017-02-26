import React, { Component } from 'react'
import {render} from 'react-dom'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import './styles.less'


const App = () => (
	<div>
		<Header />
		<Content />
		</div>
)


render(
<App />,
document.getElementById('root'))