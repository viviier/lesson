import React, { Component } from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import './styles.less'


const App = () => (
	<div>
		<Header />
		<Content />
		<Footer />
		</div>
)

const Root = () => {
	<Router history={browserHistory}>
		<Route path='/' component={App} />
	</Router>
}

render(
<App />,
document.getElementById('root'))