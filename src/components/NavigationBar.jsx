import React from 'react';

import PropTypes from 'prop-types';

// import Symbol from '../../public/assets/Symbol.svg';
import Symbol from './Symbol';

import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Icon,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
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
	appBar: {
		backgroundColor: '#1B2A49',
		width: '100%',
		height: '10%',
	},
	toolBar: {
		height: '100%',
	},
};

const NavigationBar = ({ classes, pageTitle, home, handleClick }) => {
	return (
		<AppBar className={classes.appBar} position="static">
			<Toolbar className={classes.toolBar}>
				<IconButton
					className={classes.menuButton}
					aria-label="Menu"
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h4" color="inherit" onClick={handleClick} />

				<section className={classes.rightToolbar}>
					<IconButton color="inherit" aria-label="Edit">
						<GitHubIcon />
					</IconButton>
					<IconButton color="inherit" aria-label="Save">
						<LinkedInIcon />
					</IconButton>
				</section>
			</Toolbar>
		</AppBar>
	);
};

NavigationBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
