import React from 'react'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import Locations from '../components/Locations'
import Home from '../components/Home'
import About from '../components/About'


const RootRouter = ({history}) => (
	<Router history={browserHistory}>
		<Route path='/' component={Home}>
			<IndexRoute component={About} />

			<Route path='/locations' components={Locations} />
			<Route path='/about' components={About} />
		</Route>
	</Router>
)

export default RootRouter