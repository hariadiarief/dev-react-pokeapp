import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { publicRoutes } from './Routes'
import NotFound from './Pages/404'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					{publicRoutes.map((route, index) => (
						<Route exact path={route.route} component={route.component} key={index} />
					))}
					<Route exact component={NotFound} key='404' />
				</Switch>
			</Router>
		)
	}
}
