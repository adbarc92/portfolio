import React from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Icon,
} from '@material-ui/core';
// import {
// 	MenuIcon,
// 	EditIcon,
// 	SaveIcon,
// 	MoreVertIcon,
// 	LinkedInIcon,
// 	GitHubIcon,
// } from '@material-ui/icons';

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SvgIcon from '@material-ui/core/SvgIcon';

import Symbol from '../../public/assets/Symbol.svg';

import { withStyles, withTheme } from '@material-ui/styles';

const styles = {
	// This group of buttons will be aligned to the right
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12,
	},
	menuButton: {
		marginRight: 16,
		marginLeft: -12,
	},
	homeButton: {
		color: 'white',
	},
};

const MyIcon = props => {
	return <IconButton icon={<img src={Symbol} />} label="TEST" />;
};

const HouseIcon = () => {
	return (
		<IconButton>
			<HomeIcon className={classes.homeButton} color="inherit" />
		</IconButton>
	);
};

{
	/* <Tab icon={<img src={Symbol}></img>} label="TEST" />; */
}

// Destructure all specific props
const NavBar = ({ firstProp, secondProp, etc }) => {
	console.log(firstProp);
	// Hooks can also be used here
	return (
		<div>
			<div>
				<div></div>
			</div>
		</div>
	);
};

const NavigationBar = ({ classes, pageTitle, home, handleClick }) => (
	<AppBar position="static">
		<Toolbar>
			<IconButton
				className={classes.menuButton}
				aria-label="Menu"
				color="inherit"
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h4" color="inherit" onClick={handleClick}>
				{pageTitle}
			</Typography>

			<section className={classes.rightToolbar}>
				<IconButton color="inherit" aria-label="Edit">
					<GitHubIcon />
				</IconButton>
				<IconButton color="inherit" aria-label="Save">
					<LinkedInIcon />
				</IconButton>
				{home == true ? HouseIcon() : MyIcon()}
			</section>
		</Toolbar>
	</AppBar>
);

NavigationBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
