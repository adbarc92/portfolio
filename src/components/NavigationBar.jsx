import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Navigation } from 'react-mdl';

class NavigationBar extends React.Component {
	render(){
		return (
			<Navigation>
				<Link className='left-links' to="/Projects">Projects</Link>
				<Link className='left-links' to="/Contact">Contact</Link>
				<Link className='left-links' to="/About">About</Link>
				<Link className='left-links' to="/Blog">Blog</Link>
				<Link className='right-links' to="/">Symbol</Link>
				<Link className='right-links' to="/">LinkedIn</Link>
				<Link className='right-links' to="/">GitHub</Link>
			</Navigation>
		);
	}
};

export default NavigationBar;