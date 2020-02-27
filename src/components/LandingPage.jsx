import React from 'react';
import NavigationBar from './NavigationBar';
import Symbol from '../../public/assets/Symbol.svg';
import Background from '../../public/background/IMG_0052.jpg';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
	container: {
		height: '100%',
		backgroundColor: 'green',
	},
	background: {
		width: '100%',
		height: '800px',
		backgroundImage: `url(${Background})`,
		clipPath: 'polygon(0 24%, 100% 0%, 55% 100%, 0 65%)',
		backgroundSize: '450px',
		zIndex: '-1',
	},
};

const Symbol = {};

const LandingPage = ({ classes }) => {
	const home = false;
	const handleClick = () => {
		home = !home;
	};
	return (
		<div>
			<NavigationBar
				pageTitle={'Landing'}
				handleClick={handleClick}
				home={home}
			/>
			<Container>
				<div className={classes.background} id="landing-background">
					<h4>Hello, I am Alex.</h4>
				</div>
			</Container>
		</div>
	);
};

export default withStyles(styles)(LandingPage);
