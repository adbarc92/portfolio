import React, { Component } from 'react';
import { Drawer, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class SideBar extends Component{
	render(){
		return (
			<Drawer>
				<Navigation>
					<Link className="left-links" to="/Projects">
						Projects
					</Link>
					<Link className="left-links" to="/Contact">
						Contact
					</Link>
					<Link className="left-links" to="/About">
						About
					</Link>
					<Link className="left-links" to="/Blog">
						Blog
					</Link>
				</Navigation>
			</Drawer>
		);
	}
};

export default SideBar;