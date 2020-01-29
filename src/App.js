import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={ LandingPage }></Route>
					<Route path='/About'></Route>
					<Route path='/Contact'></Route>
					<Route path='/Blog'></Route>
					<Route path='/Projects'></Route>
				</Switch>
			</Router>
		);
	}
}
