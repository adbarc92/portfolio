import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={ LandingPage }></Route>
				<Route path='/About' component={ AboutPage }></Route>
				<Route path='/Contact' component={ ContactPage }></Route>
				<Route path='/Blog' component={ BlogPage }></Route>
				<Route path='/Projects' component={ ProjectsPage }></Route>
			</Switch>
		</Router>
	);
}

export default App;
