import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<div className="navigation-bar">
			<ul className="navigation-list-left">
				<li className="navigation-link">
					<Link to="/Projects">Projects</Link>
				</li>
				<li className="navigation-link">
					<Link to="/Contact">Contact</Link>
				</li>
				<li className="navigation-link">
					<Link to="/About">About</Link>
				</li>
				<li className="navigation-link">
					<Link to="/Blog">Blog</Link>
				</li>
			</ul>
			<ul className="navigation-list-right">
				<li>
					<Link to="/">Symbol</Link>
				</li>
				<li>
					<Link to="/">LinkedIn</Link>
				</li>
				<li>
					<Link to="/">GitHub</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavigationBar;