import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<ul className='nav-list'>
					<li>Projects</li>
					<li>Blog</li>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		);
	}
}
