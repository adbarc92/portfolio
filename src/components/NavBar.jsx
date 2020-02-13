import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { MenuIcon, EditIcon, SaveIcon, MoreVertIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

// const styles = {
// 	rightToolbar: {
// 		marginLeft: 'auto',
// 		marginRight: -12,
// 	},
// 	menuButton: {
// 		marginLeft: -12,
// 		marginRight: 16,
// 	},
// };

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function NavBar(){
	const classes = useStyles();
		return(
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
};

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};
