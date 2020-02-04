import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Col } from 'reactstrap';

class NavigationBar extends React.Component {
	render(){
		return (
			<Navbar>
				<Nav className='naviagation-bar'>
					<Col>
						<NavItem className="left-link">
							<Link to="/Projects">Projects</Link>
						</NavItem>
						<NavItem className="left-link">
							<Link to="/Contact">Contact</Link>
						</NavItem>
						<NavItem className="left-link">
							<Link to="/About">About</Link>
						</NavItem>
						<NavItem className="left-link">
							<Link to="/Blog">Blog</Link>
						</NavItem>
					</Col>
					<Col>
						<NavItem className="right-link">LinkedIn</NavItem>
						<NavItem className="right-link">GitHub</NavItem>
						<NavItem className="right-link">
							<Link to="/Home"></Link>
						</NavItem>
					</Col>
				</Nav>
			</Navbar>
		);
	}
};

export default NavigationBar;