import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { MenuIcon, EditIcon, SaveIcon, MoreVertIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const styles = {
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 16,
	},
};

const NavigationBar = ({ classes }) => (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					className={classes.menuButton}
					aria-label="Menu"
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h1" color="inherit">
					Title
				</Typography>
				<section className={classes.rightToolbar}>
					<IconButton color="inherit" aria-label="Edit">
						<EditIcon />
					</IconButton>
					<IconButton color="inherit" aria-label="Save">
						<SaveIcon />
					</IconButton>
					<IconButton color="inherit" aria-label="More Options">
						<MoreVertIcon />
					</IconButton>
				</section>
			</Toolbar>
		</AppBar>
);

NavigationBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);