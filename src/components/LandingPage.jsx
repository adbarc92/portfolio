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
		clipPath: 'polygon(100% 100%, 0 100%, 0 0%)',
		width: '80%',
		height: '75.5%',
		display: 'flex',
		zIndex: '1',
		bottom: '10.8em',
	},
	triangleRight: {
		zIndex: '1',
		position: 'relative',
		backgroundColor: '#465881',
		clipPath: 'polygon(50% 50%, 100% 75%, 100% 25%)',
	},
	triangleTop: {
		position: 'relative',
		backgroundColor: '#465881',
		clipPath: 'polygon(50% 107%, 0% 0, 100% 0)',
		marginRight: '10%',
		marginLeft: '10%',
		height: '35%',
		zIndex: '1',
	},
	rect: {
		width: '100%',
		height: '60%',
		margin: '0 auto',
		backgroundColor: 'black',
		color: 'black',
		zIndex: '0',
		left: '8em',
		position: 'absolute',
		top: '20%',
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
