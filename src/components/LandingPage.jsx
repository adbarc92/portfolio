import React from 'react';
import NavigationBar from './NavigationBar';
import NavigationFooter from './NavigationFooter';
import Symbol from '../../public/assets/Symbol.svg';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
	content: {
		width: '100%',
		height: '80%',
		maxWidth: '1280px',
		marginRight: '0px',
		zIndex: '-2',
	},
	background: {
		backgroundColor: '#545454',
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	triangleLeft: {
		position: 'relative',
		backgroundColor: '#465881',
		clipPath: 'polygon(68% 75%, 0 75%, 0 41%)',
		width: '65%',
		height: '50%',
		display: 'flex',
		zIndex: '1',
	},
	triangleRight: {
		zIndex: '1',
	},
	triangleTop: {
		position: 'relative',
		backgroundColor: '#465881',
		clipPath: 'polygon(50% 100%, 0% 0, 100% 0)',
		marginRight: '10%',
		marginLeft: '10%',
		height: '35%',
		zIndex: '1',
	},
	rect: {
		width: '80%',
		height: '80%',
		backgroundColor: 'black',
		position: 'absolute',
		margin: '0 auto',
		zIndex: '0',
		display: 'flex',
		left: '10%',
		top: '10%',
		bottom: '10%'
	},
};

const LandingPage = ({ classes }) => {
	const home = false;
	const handleClick = () => {
		home = !home;
	};
	return (
		<div className={classes.background}>
			<NavigationBar
				pageTitle={'Landing'}
				handleClick={handleClick}
				home={home}
			/>
			<div className={classes.content}>
			<div className={classes.rect}></div>
				<div className={classes.triangleTop}></div>
				<div className={classes.triangleRight}></div>
				<div className={classes.triangleLeft}></div>
			</div>
			<NavigationFooter />
		</div>
	);
};

export default withStyles(styles)(LandingPage);
