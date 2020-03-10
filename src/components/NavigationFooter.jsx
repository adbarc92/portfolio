import React from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
	bottomBar: {
		backgroundColor: '#1B2A49',
		position: 'absolute',
		width: '100%',
		height: '10%',
		bottom: '0%',
		boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
	},
};

const NavigationFooter = ({classes}) => {
	return (
		<footer className={classes.bottomBar} />
	);
};

export default withStyles(styles)(NavigationFooter);