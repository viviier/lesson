import React, { Component } from 'react'
import {render} from 'react-dom'
import Header from './components/Header/Header'
import './styles.less'


const App = () => (
	<div>
		<Header />
		</div>
)


render(
<App />,
document.getElementById('root'))