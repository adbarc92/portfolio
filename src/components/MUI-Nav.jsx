import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import { MenuIcon, EditIcon, SaveIcon, MoreVertIcon } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import { MenuIcon, EditIcon, SaveIcon, MoreVertIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

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
};

const Demo = ({ classes }) => (
	<AppBar position="static">
		<Toolbar>
			<IconButton
				className={classes.menuButton}
				aria-label="Menu"
				color="inherit"
			>
				<MenuIcon />
			</IconButton>
			<Typography variant="h4" color="inherit">
				Title
			</Typography>

			<section className={classes.rightToolbar}>
				<IconButton color="inherit" aria-label="Edit">
					<GitHubIcon />
				</IconButton>
				<IconButton color="inherit" aria-label="Save">
					<LinkedInIcon />
				</IconButton>
				<IconButton color="inherit" aria-label="More Options">
					<MoreVertIcon />
				</IconButton>
			</section>
		</Toolbar>
	</AppBar>
);

Demo.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Demo);
