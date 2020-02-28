import React from 'react';
import NavigationBar from './NavigationBar';
import Symbol from '../../public/assets/Symbol.svg';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
	container: {
		height: '100%',
		backgroundColor: 'green',
	},
};

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
				<h4>Hello, I am Alex.</h4>
			</Container>
		</div>
	);
};

export default withStyles(styles)(LandingPage);
