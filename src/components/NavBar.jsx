import React, { Component } from 'react';
import 

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<ul className='nav-list'>
					<li>
						<Link className='projects-link'>
						Projects
						</Link>
					</li>
					<li>
						<Link className='blog-link'>
						Blog
						</Link>
					</li>
					<li>
						<Link className='home-link'>
						Home
						</Link>
					</li>
					<li>
						<Link className='contact-link'>
						Contact
						</Link>
					</li>
					<li>
						<Link className='about-link'>
						About
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
