import React, { Component } from 'react';
import NavBar from './NavBar'

export default class LandingPage extends Component {
	render() {
		return (
			<div className="page-container">
				<img className='landing-img' />>
				<NavBar />
				<h1 className='landing-header'>This is the header.</h1>
				<div className='landing-content'>Page Content</div>
				<NavBar />
				<div className='base-content'>Base Container</div>
			</div>
		);
	}
}
