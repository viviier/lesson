import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'

import RootRouter from './routers/RootRouter'

const App = () => (
	<RootRouter history={browserHistory} />
)

render(
	<App />,
	document.getElementById('root')
)